import { ZodError, ZodType } from 'zod';

interface IRequestSchema<Body = any, Response = any, Paths = any> {
  body: ZodType<Body>;
  response: ZodType<Response>;
  paths?: ZodType<Paths>;
}

const composeSchemaName = (url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE') =>
  `${url}-${method}`;

const schemasMap = new Map<string, IRequestSchema>();

export const doRequest = async <Body, Response>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: Body,
  paths?: Record<string, string>
): Promise<Response> => {
  const schemaName = composeSchemaName(url, method);
  const schema = schemasMap.get(schemaName);
  if (!schema) {
    throw new Error(`Schema not found for ${schemaName}`);
  }

  try {
    schema.body.parse(body);

    const urlWithPaths = paths ? `${url}?${new URLSearchParams(paths).toString()}` : url;

    const response = await fetch(url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    return schema.response.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error(error.errors[0].message);
    }
    throw error;
  }
};


// POST '/user'
// GET '/user/{id}'