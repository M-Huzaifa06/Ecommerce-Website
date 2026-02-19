import Footercontent from "./FooterContent";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5 text-center">
      <Footercontent />
      <p className="mt-4">&copy; 2023 MyShop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;