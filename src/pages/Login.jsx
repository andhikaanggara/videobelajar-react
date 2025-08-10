import AuthLayout from "../components/templates/AuthLayout";
import LoginForm from "../components/organisms/LoginForm";

export default function Login({users, setIsLoggedIn}) {
  return (
    <AuthLayout>
      <LoginForm 
      users={users}
      setIsLoggedIn={setIsLoggedIn}/>
    </AuthLayout>
  );
}
