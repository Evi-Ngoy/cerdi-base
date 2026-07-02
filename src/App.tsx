import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { InterventionsPage } from "./pages/InterventionsPage";
import { JoinPage } from "./pages/JoinPage";
import { NewsPage } from "./pages/NewsPage";
import { PartnersPage } from "./pages/PartnersPage";
import { ProjectsPage } from "./pages/ProjectsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/domaines" element={<InterventionsPage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        <Route path="/actualites" element={<NewsPage />} />
        <Route path="/galerie" element={<GalleryPage />} />
        <Route path="/partenaires" element={<PartnersPage />} />
        <Route path="/nous-rejoindre" element={<JoinPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
