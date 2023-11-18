import Auth from "@/components/Auth/Auth";
import Header from "@/components/Header/Header";

const Page = () => {
  return (
    <>
      <section className='sig_in flex justify-center overflow-hidden items-center text-white'>
        <Auth />
      </section>
    </>
  );
};

export default Page;
