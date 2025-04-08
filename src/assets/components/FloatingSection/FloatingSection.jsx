

const FloatingSection = () => {
    return (
        <>
        <div className="flex justify-center">  
                  <div className="stats shadow -mb-20 w-4xl bg-red-200">
                  <div className="stat">
        <form className="mx-auto">
          <h6 className="footer-title text-center">Subscribe</h6>
          <fieldset className="w-80">
            <p className="text-center">Enter your email address</p>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
  </div>
</div>

        </div>

     

</>
    );
};

export default FloatingSection;
