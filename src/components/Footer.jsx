import React from 'react'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (    
    <footer id="footer">
      <div class="footer-newsletter">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-top">
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>Butterfly</h3>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><Icon icon="material-symbols:chevron-right" color="#49b5e7" /> <a href="#">Home</a></li>
                <li><Icon icon="material-symbols:chevron-right" color="#49b5e7" /> <a href="#">About us</a></li>
                <li><Icon icon="material-symbols:chevron-right" color="#49b5e7" /> <a href="#">Services</a></li>
                <li><Icon icon="material-symbols:chevron-right" color="#49b5e7" /> <a href="#">Terms of service</a></li>
                <li><Icon icon="material-symbols:chevron-right" color="#49b5e7" /> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><Icon icon="material-symbols:chevron-right" color="#49b5e7" /> <a href="#">Web Design</a></li>
                <li><Icon icon="material-symbols:chevron-right" color="#49b5e7" /> <a href="#">Web Development</a></li>
                <li><Icon icon="material-symbols:chevron-right" color="#49b5e7" /> <a href="#">Product Management</a></li>
                <li><Icon icon="material-symbols:chevron-right" color="#49b5e7" /> <a href="#">Marketing</a></li>
                <li><Icon icon="material-symbols:chevron-right" color="#49b5e7" /> <a href="#">Graphic Design</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><Icon icon="bxl:twitter" /></a>
                <a href="#" class="facebook"><Icon icon="eva:facebook-fill" /></a>
                <a href="#" class="instagram"><Icon icon="bxl:instagram" /></a>
                <a href="#" class="google-plus"><Icon icon="bxl:skype" /></a>
                <a href="#" class="linkedin"><Icon icon="bxl:linkedin" /></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="container py-4">
        <div class="copyright">
          &copy; Copyright <strong><span>Butterfly</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://rukundo-prince.vercel.app/" target='_blank'>Prince RUKUNDO</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
