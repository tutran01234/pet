import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Login } from '../components/Login';
import { Home } from '../pages/Home';

import { UserStorage } from '../components/contexts/UserContext';
import { UserAccount } from '../components/User/UserAccount';
import { ProtectedRoute } from '../utils/ProtectedRoute';
import { NotFound } from '../components/NotFound';
import { Profile } from "../components/profile/profile";
import { Staff } from "../components/staff/staff";
import { DetailTrade } from "../components/trading/traddingDetail";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/staff/*" element={<Staff />} />
            <Route
              path="/account/*"
              element={
                <ProtectedRoute>
                  <UserAccount />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
