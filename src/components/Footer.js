import React, { Component } from "react";
import "./style.css";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Follow us.</h5>
            <p>
              Visit us on social media for real time updates and lots of fun
              content!
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>

            <a href="#" class="mx-1" role="button">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="mx-1" role="button">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="mx-1" role="button">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="mx-1" role="button">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="mx-1" role="button">
              <i class="fab fa-pinterest"></i>
            </a>
            <a href="#" class="mx-1" role="button">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#" class="mx-1" role="button">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="mx-1" role="button">
              <i class="fab fa-stack-overflow"></i>
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer
          fluid
          className="md-5 py-3 text-center white-text elegant-color z-depth-2"
        >
          &copy; {new Date().getFullYear()} || Made with{" "}
          <i class="fas fa-heart red-text mx-1"></i> by a foodie :)
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
