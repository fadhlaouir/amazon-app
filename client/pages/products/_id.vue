<template>
  <main>
    <!-- Breadcrumbs -->
    <div class="a-spacing-top-medium" />
    <div class="container-fluid">
      <div class="wayfinding-breadcrumbs-container">
        <ul class="a-unordered-list a-horizontal a-size-small">
          <!-- Category -->
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">Category</a>
            </span>
          </li>
          <li>
            <span class="a-list-item">></span>
          </li>
          <!-- Product Title -->
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">Product Title</a>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-fluid">
      <div class="dp-container">
        <div class="row">
          <!-- First 3 grid - Product Image and Author's section -->
          <div class="col-lg-3 col-md-3 col-sm-4">
            <div class="leftCol">
              <!-- Image -->
              <div class="imgBlock">
                <div class="eBooksimg">
                  <img src="/img/raed.jpg" class="img-fluid">
                </div>
              </div>
              <!-- Follow Author -->
              <div class="authorFollow">
                <hr class="a-divider-normal">
                <h1 class="authorFollowHeading">
                  Follow The Author
                </h1>
                <div class="a-spacing-top-small">
                  <div class="row">
                    <!-- Author's Image -->
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="smallAuthorImageContainer">
                        <a href="#">
                          <img src="/img/raed.jpg" class="img-fluid">
                        </a>
                      </div>
                    </div>
                    <!-- Author's  Name -->
                    <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="authorNameCol">
                        <a href="#">Raed Fadhlaoui</a>
                      </div>
                    </div>
                    <!-- Author's Follow Button -->
                    <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                      <div class="authorBtn mt-2">
                        <a href="#">
                          <span class="btnFollow">
                            <span class="a-btn-inner">
                              <button class="a-btn-text">+ Follow</button>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Middle 6 Grid - Description -->
          <div class="col-lg-6 col-md-6 col-sm-8">
            <div class="centerCol">
              <!-- Product Title -->
              <div class="titleDiv">
                <h1 class="productTitle">
                  <span class="largeTitle"> product Title </span>
                  <span class="smallTitle"> small Title </span>
                </h1>
              </div>
              <!-- Author's Name -->
              <div class="bylineinfo">
                by
                <a href="#" class="authorName">
                  Raed Fadhlaoui
                  <i class="fas fa-chevron-down" style="font-size:8px !important; color:#555 !important;" />
                </a> (Author)
              </div>
              <!-- Description -->
              <div class="reviewGroup">
                <hr style="maring-top: 10px;">
                <!-- A tags Dummy Data -->
                <div class="mediaMatrix">
                  <div class="formats">
                    <a href="#" class="link-expander">
                      >
                      <span class="tmmShowPrompt">
                        See all 18 formats and editions
                      </span>
                    </a>
                    <ul>
                      <!-- Kindle -->
                      <li class="swatchElement" style="width: 117px;">
                        <span class="a-list-item">
                          <span class="a-button-toggle">
                            <span class="a-button-inner">
                              <a href="#" class="a-button-text">
                                <span>Kindle</span>
                                <br>
                                <span class="a-color-secondary">
                                  -
                                </span>
                              </a>
                            </span>
                          </span>
                          <span class="tmm-olp-links" />
                          <span class="tmm-olp-links">
                            <a href="#" class="a-size-mini">
                              <span class="kcpAppBox">
                                <span class="a-decarative">
                                  Read with Our <span class="a-text-bold">Free App</span>
                                </span>
                              </span>
                            </a>
                          </span>
                        </span>
                      </li>
                      <!-- Audible -->
                      <li class="swatchElement" style="width: 117px;">
                        <span class="a-list-item">
                          <span class="a-button-toggle">
                            <span class="a-button-inner">
                              <a href="#" class="a-button-text">
                                <span>
                                  <img src="/img/audibleLogo.png" alt="audibleLogo" class="img-fluid" style="width: 20px;">
                                  Audible
                                </span>
                                <br>
                                <span class="a-color-secondary">
                                  -
                                </span>
                              </a>
                            </span>
                          </span>
                          <span class="tmm-olp-links" />
                          <span class="tmm-olp-links">
                            <a href="#" class="a-size-mini">
                              <span class="kcpAppBox">
                                <span class="a-decarative">
                                  <span class="a-text-bold">Free App</span> with your Audible trial
                                </span>
                              </span>
                            </a>
                          </span>
                        </span>
                      </li>
                      <!-- Paperback -->
                      <li class="swatchElement" style="width: 117px;">
                        <span class="a-list-item">
                          <span class="a-button-toggle">
                            <span class="a-button-inner">
                              <a href="#" class="a-button-text">
                                <span>Paperback</span>
                                <br>
                                <span class="a-color-secondary">
                                  -
                                </span>
                              </a>
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Description -->
                <div class="bookDescription">
                  <div class="bookDescriptionInner">
                    this book is awsome
                  </div>
                </div>
                <!-- Product Specification -->
                <div class="aboutEbooksFeature">
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 mb-1">
                      <div class="a-declarative">
                        Length: <span><a href="#">386 pages <i class="a-icon a-icon-popover" /></a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Last 3 grid Buying section -->
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="combinedBuyBox">
              <div class="buyBox">
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input id="test1" type="radio" name="radio-group checked">
                        <label for="test1"> Buy Now</label>
                      </form>
                    </div>
                    <!-- Product Price -->
                    <div class="float-right">
                      <span class="a-size-medium a-color-price offer-price a-text-normal">
                        39 TND
                      </span>
                    </div>
                  </div>
                </div>
                <div class="a-section a-spacing-none">
                  <div class="row">
                    <div class="col-sm-5 col-5">
                      <select>
                        <option value="1">
                          <!-- &nbsp; non-breaking space -->
                          Qty: &nbsp; 1
                        </option>
                        <option value="2">
                          Qty: &nbsp; 2
                        </option>
                        <option value="3">
                          Qty: &nbsp; 3
                        </option>
                        <option value="4">
                          Qty: &nbsp; 4
                        </option>
                        <option value="5">
                          Qty: &nbsp; 5
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="a-section a-spacing-small a-spacing-top-micro">
                  <div class="row">
                    <span class="a-color-base buyboxShippingLabel" />
                  </div>
                </div>
                <div class="a-section a-spacing-small">
                  <div class="a-section a-spacing-none">
                    <span class="a-size-medium a-color-success">
                      In Stock
                    </span>
                  </div>
                  <div class="a-section a-spacing-mini">
                    Ships from and sold by Amazon.com
                  </div>
                </div>
                <div class="a-section">
                  <div class="a-button-stack">
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-cart" />
                        <input type="submit" name="submit.add-to-cart" class="a-button-input">
                        <span class="a-button-text">Add to Cart</span>
                      </span>
                    </span>
                  </div>
                  <div class="a-button-stack">
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-buynow" />
                        <input type="submit" name="submit.add-to-cart" class="a-button-input">
                        <span class="a-button-text">Buy Now</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="a-row">
                  <div class="a-spacing-top-small">
                    <div class="a-section a-spacing-none">
                      <div class="a-section a-spacing-none a-spacing-top-mini">
                        This item shipts to
                        <b>All Tunisia</b>
                        <b>Get it by Monday, Jan 22</b>
                        Choose this date at checkout
                      </div>
                    </div>
                  </div>
                </div>
                <hr>
                <span class="a-declarative">
                  <a href="#" class="a-link-normal">
                    <div class="a-row a-spacing-mini">
                      <i class="fal fa-map-market-alt" />
                      <span class="a-size-small">
                        Deliver to Kef
                      </span>
                    </div>
                  </a>
                </span>
                <br>
                <hr>
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input id="test2" type="radio" name="radio-group">
                        <label for="test2">Buy Now</label>
                      </form>
                    </div>
                    <div class="float-right">
                      <span class="a-color-base offer-price a-text-normal">39 TND</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="kcpAppBaseBox text-center">
              <img src="/img/readyondevice.png" alt="Ready On Device" class="img-fluid">
            </div>
          </div>
        </div>
        <br>
        <hr>
        <!-- Author's section -->
        <div class="books-entity-teaser">
          <div class="bucket">
            <h2>More about the author</h2>
            <div class="content">
              <div class="row">
                <!-- author's photo and button -->
                <div class="col-md-2 col-sm-4 col-4">
                  <div class="authorContent">
                    <div class="authorImageSingle">
                      <a href="#">
                        <img src="/img/raed.jpg" alt="" class="img-fluid">
                      </a>
                    </div>
                    <div class="authorFollow">
                      <button class="followButton" type="button">
                        <span class="pr-fb-icon" />
                        <span class="pr-fb-text">Follow</span>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- author's about -->
                <div class="col-md-10 col-sm-8 col-8 pl-0">
                  <div class="mainContent">
                    <h3>Biography</h3>
                    <div id="authorBio">
                      My Name is Raed Fadhlaoui
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
