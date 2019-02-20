module.exports = {
    login_status: `<a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/login">Login</a>`,
    nav_template: function(contests, login_status = false) {
        var login_bar = ``;
        if (login_status === true) {
            login_bar = `<a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/logout_process">Logout</a>`;
        } else {
            login_bar = `<a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/login">Login</a>`;;
        }
        var nav = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
    
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
    
        <title>Kapture-for your kpop tour</title>
    
        <!-- Bootstrap core CSS -->
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    
        <!-- Custom fonts for this template -->
        <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    
        <!-- Plugin CSS -->
        <link href="/vendor/magnific-popup/magnific-popup.css" rel="stylesheet" type="text/css">
    
        <!-- Custom styles for this template -->
        <link href="/css/freelancer.min.css" rel="stylesheet">
        <link href="/css/detail.css" rel="stylesheet">
    
        <!--CDN icon img-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    
        <style>
            #description {
                height: 214px;
            }
        </style>
    </head>
    
    
    
    <body id="page-top">
    
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="/">Kapture</a>
                <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
          </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1">
                            ${login_bar}
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/">Home</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/forum">Forum</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/tour">Tour</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
          ${contests}
    
        <div class="copyright py-4 text-center text-white">
            <div class="container">
                <small>Copyright &copy; Your Website 2019</small>
            </div>
        </div>
    
        <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
        <div class="scroll-to-top d-lg-none position-fixed ">
            <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                <i class="fa fa-chevron-up"></i>
            </a>
        </div>
    
    
    
        <!-- Bootstrap core JavaScript -->
        <script src="/vendor/jquery/jquery.min.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    
        <!-- Plugin JavaScript -->
        <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>
        <script src="/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
    
        <!-- Contact Form JavaScript -->
        <script src="/js/jqBootstrapValidation.js"></script>
        <script src="/js/contact_me.js"></script>
    
        <!-- Custom scripts for this template -->
        <script src="/js/freelancer.min.js"></script>
    
    </body>
    
    </html>`;
        return nav;
    },
    login: ` <!-- form Section -->
    <div class="my-3 p-3 bg-white rounded box-shadow" style="height: 582px;">
        <br>
        <br><br>
        <h3><strong>Longin</strong></h3>
        <form action="/login_process" method="post">
            <div class="form-group">
                <label for="exampleInputEmail1">Id</label>
                <input type="text" name="id" class="form-control" id="Id" placeholder="Id">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="pwd" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Auto login</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <p>if you are not sign up, <a href="/sign_up">Click this!!</a> </p>
    </div>`,
    sign_up: ` <!-- form Section -->
    <div class="my-3 p-3 bg-white rounded box-shadow" style="height: 582px;">
        <br>
        <br><br>
        <h3><strong>Sign up</strong></h3>
        <form action="/sign_up_process" method="post">
            <div class="form-group">
                <label for="exampleInputEmail1">Id</label>
                <input type="text" name="id" class="form-control" id="Id" placeholder="Id">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="pwd" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Checking password</label>
                <input type="password" name="re_pwd" class="form-control" id="password" placeholder="Checking password">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Nickname</label>
                <input type="text" name="nickname" class="form-control" id="nickname" placeholder="Nickname">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
`,
    write_des: ` <!-- form Section -->
<div class="my-3 p-3 bg-white rounded box-shadow">
    <br>
    <br>
    <br>
    <br><br>
    <h3><strong>Wirte your description</strong></h3>
    <form action="/write_des_process" method="post">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" class="form-control" id="title" placeholder="title">
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" class="form-control" id="description" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
`,
    tour: `<!--Tour table board Section-->

<div class="my-3 p-3 bg-white rounded box-shadow">
    <br>
    <br>
    <br>
    <br>
    <h6 class="border-bottom border-gray pb-2 mb-0">Suggestions</h6>

    <div class="media text-muted pt-3">
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
                <strong class="text-gray-dark">Full Name</strong>
            </div>
            <img id="profile-img" src="img/profile.png" alt="" class="d-block">
            <span class="d-block">@username&nbsp;&nbsp;&nbsp;views&nbsp;&nbsp;&nbsp;like</span>
            <span class="d-block">@username&nbsp;&nbsp;&nbsp;views&nbsp;&nbsp;&nbsp;like</span>
            <span class="d-block">@username&nbsp;&nbsp;&nbsp;views&nbsp;&nbsp;&nbsp;like</span>
            <span class="d-block">@username&nbsp;&nbsp;&nbsp;views&nbsp;&nbsp;&nbsp;like</span>
        </div>
    </div>

    <div class="media text-muted pt-3">
        <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">

        </div>
    </div>

    <div class="media text-muted pt-3">
        <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
                <strong class="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
            </div>
            <span class="d-block">@username</span>
        </div>
    </div>

    <div class="media text-muted pt-3">
        <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
                <strong class="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
            </div>
            <span class="d-block">@username</span>
        </div>
    </div>
    <small class="d-block text-right mt-3">
      <a href="#">All suggestions</a>
    </small>
    <button id="write" type="button" class="btn btn-primary">Write</button>
</div>`,
    forum_template: function(post = '') {
        var html = `<!--Forum table board Section-->

        <div class="my-3 p-3 bg-white rounded box-shadow">
            <br>
            <br>
            <br>
            <h6 class="border-bottom border-gray pb-2 mb-0">Forum</h6>
        
            <div class="media text-muted pt-3">
                <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    ${post}
                </div>
            </div>
    
            <small class="d-block text-right mt-3">
              <a href="#">All suggestions</a>
            </small>
            <a href="/write_des">write</a>
        </div>`;
        return html;
    },
    post_template: function(idx, title, author, date, views = 0, ) {
        var post = `<div onclick="location.href='forum1/${idx}'" class="media text-muted pt-3">
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
                    <strong class="text-gray-dark">${title}</strong>
                    <a href="# ">like</a>
            </div>
                <span class="d-block ">${author}&nbsp;&nbsp;&nbsp;${views}views&nbsp;&nbsp;&nbsp;${date}</span>
            </div>
    </div>`;
        return post;
    },
    des_template: function(idx, title, author, date, views, description) {
        var html = `<!-- description Section -->
        <br>
        <br>
        <br>
        
        <div class="my-3 p-3 bg-white rounded box-shadow">
            <h3><strong>${title}</strong></h3>
            <p class="border-bottom border-gray pb-2 mb-0">${author}&nbsp;&nbsp;&nbsp;${date}&nbsp;&nbsp;&nbsp;${views}views</p>
            <div class="media pt-3">
                <div class="media-body pb-3 mb-0 small lh-125 ">
                    <div class="d-flex justify-content-between align-items-center w-100">
                        <p>
                            ${description}
                        </p>
                    </div>
                    <div id="like-button">
                        <img id="thumb" src="/img/empty-thumb.png" alt="thumb">
                        <p>number</p>
                    </div>
                </div>
            </div>
        </div>
        <form action="/add_comment_process/${idx}" method="post">
        <div id="input-comment" class="input-group mb-3">
            <input name="comment" type="text" class="form-control" placeholder="Add your comment!" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="submit" class="input-group-append">Add</button>
        </div>
    </form>`;
        return html;
    },
    comment_template: function(author, description, date, like) {
        var html = ` <div class="media pt-3">
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
                <strong class="text-gray-dark">${author}</strong>
            </div>
                <p>${description}</p>
                <span class="d-block text-muted">${date}&nbsp;&nbsp;&nbsp;<a href="">27 ${like}likes</a></span>
            </div>
        </div>`;
        return html;
    },
    index: ` <!-- Header -->
<header class="masthead bg-primary text-white text-center">
    <div class="container">
        <img class="img-fluid mb-5 d-block mx-auto" src="img/profile.png" alt="">
        <h1 class="text-uppercase mb-0">Start Bootstrap</h1>
        <hr class="star-light">
        <h2 class="font-weight-light mb-0">Web Developer - Graphic Artist - User Experience Designer</h2>
    </div>
</header>

<!-- Portfolio Grid Section -->
<section class="portfolio" id="portfolio">
    <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <hr class="star-dark mb-5">
        <div class="row">
            <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fas fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/cabin.png" alt="">
                </a>
            </div>
            <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fas fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/cake.png" alt="">
                </a>
            </div>
            <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fas fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/circus.png" alt="">
                </a>
            </div>
            <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fas fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/game.png" alt="">
                </a>
            </div>
            <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fas fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/safe.png" alt="">
                </a>
            </div>
            <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fas fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/submarine.png" alt="">
                </a>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="bg-primary text-white mb-0" id="about">
    <div class="container">
        <h2 class="text-center text-uppercase text-white">About</h2>
        <hr class="star-light mb-5">
        <div class="row">
            <div class="col-lg-4 ml-auto">
                <p class="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
            </div>
            <div class="col-lg-4 mr-auto">
                <p class="lead">Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
            </div>
        </div>
        <div class="text-center mt-4">
            <a class="btn btn-xl btn-outline-light" href="#">
                <i class="fas fa-download mr-2"></i> Download Now!
            </a>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact">
    <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <hr class="star-dark mb-5">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Name</label>
                            <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name.">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Email Address</label>
                            <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address.">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Phone Number</label>
                            <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number.">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Message</label>
                            <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <br>
                    <div id="success"></div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="footer text-center">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">Location</h4>
                <p class="lead mb-0">2215 John Daniel Drive
                    <br>Clark, MO 65243</p>
            </div>
            <div class="col-md-4 mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">Around the Web</h4>
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                            <i class="fab fa-fw fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                            <i class="fab fa-fw fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                            <i class="fab fa-fw fa-twitter"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                            <i class="fab fa-fw fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                            <i class="fab fa-fw fa-dribbble"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-md-4">
                <h4 class="text-uppercase mb-4">About Freelancer</h4>
                <p class="lead mb-0">Freelance is a free to use, open source Bootstrap theme created by
                    <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
            </div>
        </div>
    </div>
</footer>
`,
}