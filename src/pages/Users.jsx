import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <div>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </div>
  );
}

export default NewUsers;
