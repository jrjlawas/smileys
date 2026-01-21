function Map() {
  return (
    <div className="map-section">
      <div className="container">
        <div className="rwo">
          <div className="col-lg-12">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2109.660637360944!2d-113.39979455252842!3d51.03788162172124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5373cce683b6a1a5%3A0x94f2df480e72fa2c!2s330%20Ridge%20Rd%2C%20Strathmore%2C%20AB%20T1P%201M6%2C%20Canada!5e0!3m2!1sen!2sph!4v1768961322266!5m2!1sen!2sph"
                width="1320"
                height="560"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
