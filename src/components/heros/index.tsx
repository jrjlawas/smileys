import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="banner-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-two-taitel">
              <h1>
                <span>Strathmore’s #1</span> Spot for Breakfast, Brunch & Good
                Vibes
              </h1>

              <p>
                Proudly known as the Best Breakfast in Town, Smiley’s Restaurant
                & Lounge serves fresh, flavorful meals daily at 330 Ridge Rd,
                Strathmore, AB Canada.
              </p>
            </div>

            <div className="banner-taiteL-btn">
              <Link to="#" className=" main-btn main-btn-two ">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1186 8.33333C14.1186 9.68336 13.0242 10.7778 11.6742 10.7778C10.3241 10.7778 9.22971 9.68336 9.22971 8.33333C9.22971 6.9833 10.3241 5.88889 11.6742 5.88889C13.0242 5.88889 14.1186 6.9833 14.1186 8.33333Z"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M19.0075 8.33333C19.0075 12.3834 14.1186 18.1111 11.6742 18.1111C9.22971 18.1111 4.34082 12.3834 4.34082 8.33333C4.34082 4.28325 7.62407 1 11.6742 1C15.7242 1 19.0075 4.28325 19.0075 8.33333Z"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15.3412 15.668H16.7181C18.169 15.668 19.545 16.3124 20.4738 17.4271L21.7779 18.992C23.1047 20.5841 21.9725 23.0013 19.9 23.0013H3.44912C1.37662 23.0013 0.244465 20.5841 1.57124 18.992L2.87532 17.4271C3.80418 16.3124 5.18015 15.668 6.63107 15.668H8.0079"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Pick Up
              </Link>

              <Link to="#" className=" main-btn-two-banner">
                <span>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.1226 25.6654H18.8768C21.5703 25.6654 23.7538 23.5817 23.7538 21.0113V15.3206C23.7538 14.4943 24.0978 13.7019 24.71 13.1176C26.1286 11.764 25.9442 9.52109 24.3218 8.3951L16.8682 3.22219C15.1581 2.03531 12.8413 2.03531 11.1311 3.22219L3.6776 8.3951C2.05519 9.52109 1.87078 11.764 3.28931 13.1176C3.90156 13.7019 4.24552 14.4943 4.24552 15.3206V21.0113C4.24552 23.5817 6.42906 25.6654 9.1226 25.6654Z"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.0218 18.2041C19.0218 20.8668 16.5108 25.436 13.9997 25.436C11.4886 25.436 8.97754 20.8668 8.97754 18.2041C8.97754 15.5414 11.226 13.3828 13.9997 13.3828C16.7734 13.3828 19.0218 15.5414 19.0218 18.2041Z"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15.5063 17.9028C15.5063 18.7348 14.8318 19.4094 13.9997 19.4094C13.1676 19.4094 12.493 18.7348 12.493 17.9028C12.493 17.0707 13.1676 16.3961 13.9997 16.3961C14.8318 16.3961 15.5063 17.0707 15.5063 17.9028Z"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                In Restaurant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
