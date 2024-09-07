import AdminDashboard from "@/components/AdminDashboard";
import Appointments from "@/components/Appointments";
import DepartmentsPage from "@/components/DepartmentsPage";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Appointments />
      <AdminDashboard />
      <DepartmentsPage />
    </div>
  );
}
