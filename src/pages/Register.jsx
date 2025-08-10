import AuthLayout from "../components/templates/AuthLayout";
import RegisterForm from "../components/organisms/RegisterForm";

export default function Register({users, setUsers}) {
  return (
    <AuthLayout>
        <RegisterForm 
        users={users}
        setUsers={setUsers}/>
    </AuthLayout>
  );
}
