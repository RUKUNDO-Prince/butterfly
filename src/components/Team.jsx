import React from 'react'
import team1 from '../assets/img/team/team-1.jpg'
import team2 from '../assets/img/team/team-2.jpg'
import team3 from '../assets/img/team/team-3.jpg'
import team4 from '../assets/img/team/team-4.jpg'
import { Icon } from '@iconify/react';

const Team = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={team1} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><Icon icon="devicon:twitter" /></a>
                  <a href=""><Icon icon="bi:facebook" /></a>
                  <a href=""><Icon icon="bi:instagram" /></a>
                  <a href=""><Icon icon="bi:linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={team2} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><Icon icon="devicon:twitter" /></a>
                  <a href=""><Icon icon="bi:facebook" /></a>
                  <a href=""><Icon icon="bi:instagram" /></a>
                  <a href=""><Icon icon="bi:linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={team3} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><Icon icon="devicon:twitter" /></a>
                  <a href=""><Icon icon="bi:facebook" /></a>
                  <a href=""><Icon icon="bi:instagram" /></a>
                  <a href=""><Icon icon="bi:linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={team4} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><Icon icon="devicon:twitter" /></a>
                  <a href=""><Icon icon="bi:facebook" /></a>
                  <a href=""><Icon icon="bi:instagram" /></a>
                  <a href=""><Icon icon="bi:linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Team
