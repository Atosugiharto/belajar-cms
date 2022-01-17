import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceTypePage from "./service-type/ServiceTypePage";
import AddServiceType from "./service-type/AddServiceType";
import UpdateServiceType from "./service-type/UpdateServiceType";
import PatientTypePage from "./patient-type/PatientTypePage";
import AddPatientType from "./patient-type/AddPatientType";
import UpdatePatientType from "./patient-type/UpdatePatientType";
import DrugTypePage from "./drug-type/DrugTypePage";
import AddDrugType from "./drug-type/AddDrugType";
import UpdateDrugType from "./drug-type/UpdateDrugType";
import ProfessionPage from "./profession/ProfessionPage";
import AddProfession from "./profession/AddProfession";
import UpdateProfession from "./profession/UpdateProfession";
import ServicePage from "./service/ServicePage";
import AddService from "./service/AddService";
import UpdateService from "./service/UpdateService";
import PaymentMethodPage from "./payment-method/PaymentMethodPage";
import AddPaymentMethod from "./payment-method/AddPaymentMethod";
import UpdatePaymentMethod from "./payment-method/UpdatePaymentMethod";
// import Signup from "./service-type/Signup";
// import Login from "./service-type/Login";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ServiceTypePage />}></Route>
          <Route path="/add" element={<AddServiceType />}></Route>
          <Route path="/update/:id" element={<UpdateServiceType />}></Route>
          <Route path='/patient-type' element={<PatientTypePage />}></Route>
          <Route path="/add/patient-type" element={<AddPatientType />}></Route>
          <Route path="/update/patient-type:id" element={<UpdatePatientType />}></Route>
          <Route path='/drug-type' element={<DrugTypePage />}></Route>
          <Route path="/add/drug-type" element={<AddDrugType />}></Route>
          <Route path="/update/drug-type/:id" element={<UpdateDrugType />}></Route>
          <Route path='/profession' element={<ProfessionPage />}></Route>
          <Route path="/add/profession" element={<AddProfession />}></Route>
          <Route path="/update/profession/:id" element={<UpdateProfession />}></Route>
          <Route path='/service' element={<ServicePage />}></Route>
          <Route path="/add/service" element={<AddService />}></Route>
          <Route path="/update/service:id" element={<UpdateService />}></Route>
          <Route path='/payment-method' element={<PaymentMethodPage />}></Route>
          <Route path="/add/payment-method" element={<AddPaymentMethod />}></Route>
          <Route path="/update/payment-method:id" element={<UpdatePaymentMethod />}></Route>
          
          {/* <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;