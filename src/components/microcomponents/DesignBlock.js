import React, { Component } from "react";
import { Tabs, Tab, Container, Image } from "react-bootstrap";

export default function DesignBlock(params) {
  return (
    <Container className="my-5 py-5 z-depth-1 rounded fluid">
      <section class="px-md-5 mx-md-5  fluid">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <Image
              src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
              class="img-fluid mb-5"
              alt=""
            />

            <p style={{ marginTop: "1em" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam
              sapiente molestiae numquam quas, voluptates omnis nulla ea odio
              quia similique corrupti magnam, doloremque laborum.
            </p>

            <a class="btn btn-info btn-md ml-0" href="#" role="button">
              Read More<i class="fa fa-magic ml-2"></i>
            </a>
          </div>

          <div class="col-lg-6 mb-2 fluid">
            <div class="view overlay z-depth-1-half">
              <Image
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                class="img-fluid rounded"
                alt=""
                height="100%"
                fluid
              />
              <a href="#">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
