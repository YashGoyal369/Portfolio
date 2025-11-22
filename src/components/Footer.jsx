const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Yash Goyal. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            Made With ❤️ By Yash Goyal
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
