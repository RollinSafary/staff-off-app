import { Routes, Route } from 'react-router-dom';
import MainLayout from 'src/components/layouts/MainLayout';
import { HomePage } from 'src/pages/home';
import { RegistrationPage } from 'src/pages/registration';

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="registration" element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
};
