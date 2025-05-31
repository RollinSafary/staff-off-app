import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'src/pages/home';
import { RegistrationPage } from 'src/pages/registration';

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};
