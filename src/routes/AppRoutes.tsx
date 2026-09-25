import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/common/Layout';
import Home from '@/pages/Home/Home';

const ServicesPage = lazy(() => import('@/pages/Services/ServicesPage'));
const WorkPage = lazy(() => import('@/pages/Work/WorkPage'));
const ProjectDetail = lazy(() => import('@/pages/Work/ProjectDetail'));
const AboutPage = lazy(() => import('@/pages/About/AboutPage'));
const ProcessPage = lazy(() => import('@/pages/Process/ProcessPage'));
const SaaSPage = lazy(() => import('@/pages/SaaS/SaaSPage'));
const ContactPage = lazy(() => import('@/pages/Contact/ContactPage'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

// Admin is split into its own chunks so visitors never download it.
const AdminLayout = lazy(() => import('@/admin/components/AdminLayout').then((m) => ({ default: m.AdminLayout })));
const ProtectedRoute = lazy(() => import('@/admin/components/ProtectedRoute').then((m) => ({ default: m.ProtectedRoute })));
const Login = lazy(() => import('@/admin/pages/Login'));
const Dashboard = lazy(() => import('@/admin/pages/Dashboard'));
const Leads = lazy(() => import('@/admin/pages/Leads'));
const Subscribers = lazy(() => import('@/admin/pages/Subscribers'));

export function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:slug" element={<ProjectDetail />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="saas" element={<SaaSPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="admin/login" element={<Login />} />
        <Route path="admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="leads" element={<Leads />} />
            <Route path="subscribers" element={<Subscribers />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
