<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>MountCSS</title>
    <script src="//localhost:35729/livereload.js"></script>
    <link rel="stylesheet" href="style.css">
    <style>

        body {
         padding-bottom: 10rem;
        }
        .grid-demo {
            background: rgba(0, 0, 0, 0.3);
            padding: .3rem 0;
            text-align: center;
            color: black;
            margin-bottom: 2rem;
        }
        .sg-section-title {
            display: block;
            padding: .4rem 1rem;
            background-color: #3498db;
            color: white;
            font-size: 1.6rem;
            margin: 3rem 0 1rem;
            text-transform: uppercase;
        }
        .module-title {
            margin-top: 2rem;
        }

        [class*="box-item"] {
            background: rgba(0, 0, 0, 0.3);
            text-align: center;
        }

        .alightment-demo {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            padding: 1rem;
            width: 300px;
            height: 300px;
            text-align: center;
            border: 1px solid #000;
        }
        .alightment-container {
            width: 100%;
            height: 100%;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-4">
                Sidebar
            </div>
            <div class="col-8">
                <!-- ********************
                    GRID
                ******************** -->
                <section>
                    <h1 class="sg-section-title">Grid</h1>
                    <?php include('patterns/base/grid.php') ?>
                </section>

                <!-- ********************
                    TYPOGRAPHY
                ******************** -->
                <section>
                    <h1 class="sg-section-title">Typography</h1>

                    <?php include('patterns/base/headings.php') ?>

                    <h1 class="sg-section-title">List Types</h1>
                    <?php include('patterns/base/lists.php') ?>
                </section>

                <section>
                    <h1 class="sg-section-title">Paragraph</h1>
                    <?php include('patterns/base/typography.php') ?>

                    <h1 id="form_elements">Forms</h1>
                    <?php include('patterns/base/forms.php') ?>
                </section>

                <!-- ********************
                    BUTTON
                ******************** -->
                <section>
                    <h1 class="sg-section-title">Button</h1>
                    <?php include('patterns/base/buttons.php') ?>
                </section>

                <!-- ********************
                    TABLE
                ******************** -->
                <section>
                    <h1 id="tables">Tables</h1>
                    <?php include('patterns/base/table.php') ?>
                </section>

                <section>
                    <h1 class="sg-section-title">Components</h1>

                    <h3 class="module-title">Media Object</h3>
                    <hr>
                    <?php include('patterns/modules/media.php') ?>

                   <h3 class="module-title">Breadcrumbs</h3>
                   <hr>
                   <?php include('patterns/modules/breadcrumb.php') ?>

                   <h3 class="module-title">Pagination</h3>
                   <hr>
                   <?php include('patterns/modules/pagination.php') ?>

                   <h3 class="module-title">Tags</h3>
                   <hr>
                   <?php include('patterns/modules/tags.php') ?>

                   <h3 class="module-title">Message</h3>
                   <hr>
                   <?php include('patterns/modules/messages.php') ?>

                   <h3 class="module-title">Hero</h3>
                   <hr>
                   <?php include('patterns/modules/hero.php') ?>

                   <h3 class="module-title">Layout utilities</h3>
                   <hr>
                   <?php include('patterns/modules/layout-utilities.php') ?>

                   <h3 class="module-title">Embed-responsive</h3>
                   <hr>
                   <?php include('patterns/modules/embed-responsive.php') ?>

                   <h3 class="module-title">Headers</h3>
                   <hr>
                   <?php include('patterns/modules/header.php') ?>

                   <h3 class="module-title">Headers</h3>
                   <hr>
                   <?php include('patterns/modules/header.php') ?>

                   <h3 class="module-title">Footer</h3>
                   <hr>
                   <?php include('patterns/modules/footer.php') ?>
                </section>
            </div>
        </div>
    </div>
</body>

</html>
