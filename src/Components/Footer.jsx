

const Footer = () => {
    return (
        <footer className="footer footer-center bg-white text-base-content  p-10">
        <nav className="text-center">
      <h1 className="text-3xl font-bold">Gadget Heaven</h1>
      <p className="text-gray-400 font-medium">Leading the way in cutting-edge technology and innovation.</p>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-28">
           <div>
            <h1 className="font-bold text-gray-700">Service</h1>
            <ul className="text-gray-400 ">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
           </div>
           <div>
            <h1 className="font-bold text-gray-700">Company</h1>
            <ul className="text-gray-400 ">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
           </div>
           <div>
            <h1 className="font-bold text-gray-700">Legal</h1>
            <ul className="text-gray-400 ">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
           
            </ul>
           </div>
          </div>
        </nav>
      
      </footer>
    );
};

export default Footer;