import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import CardWrapper from "./card-wrapper";

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel=''
      headerTitle='🔐 AuthMe'
      backButtonHref='/href/login'
      backButtonLabel='Back to login'
    >
      <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
        <ExclamationTriangleIcon className='text-destructive' />
        <p>Oops. Something went wrong</p>
      </div>
    </CardWrapper>
  );
}
