$(function () {
    $('.panel-google-plus > .panel-footer > .input-placeholder, .panel-google-plus > .panel-google-plus-comment > .panel-google-plus-textarea > button[type="reset"]').on('click', function(event) {
        var $panel = $(this).closest('.panel-google-plus');
        $comment = $panel.find('.panel-google-plus-comment');

        $comment.find('.btn:first-child').addClass('disabled');
        $comment.find('textarea').val('');

        $panel.toggleClass('panel-google-plus-show-comment');

        if ($panel.hasClass('panel-google-plus-show-comment')) {
            $comment.find('textarea').focus();
        }
    });
    $('.panel-google-plus-comment > .panel-google-plus-textarea > textarea').on('keyup', function(event) {
        var $comment = $(this).closest('.panel-google-plus-comment');

        $comment.find('button[type="submit"]').addClass('disabled');
        if ($(this).val().length >= 1) {
            $comment.find('button[type="submit"]').removeClass('disabled');
        }
    });
});

var data = [
    {
        profileName: "BBC News",
        profilePicture : "https://lh3.googleusercontent.com/-CxXg7_7ylq4/AAAAAAAAAAI/AAAAAAAAAQ8/LhCIKQC5Aq4/s46-c-k-no/photo.jpg",
        postContent : "This is just a test",
        imageSource : "https://s3.us-east-2.amazonaws.com/data-viz-project/1.jpg",
        comments : [
            {
                username: "Bagher",
                profilePicture: "http://placehold.it/80",
                commentText: "this is amazing!"
            },
            {
                username: "Behati",
                profilePicture: "http://placehold.it/80",
                commentText: "Amen Sister!"
            }
        ]
    },
    {
        profileName: "CNN",
        profilePicture : "https://lh3.googleusercontent.com/-CxXg7_7ylq4/AAAAAAAAAAI/AAAAAAAAAQ8/LhCIKQC5Aq4/s46-c-k-no/photo.jpg",
        postContent : "This is just a test",
        imageSource : "https://s3.us-east-2.amazonaws.com/data-viz-project/1.jpg",
        comments : [
            {
                username: "Bagher",
                profilePicture: "http://placehold.it/80",
                commentText: "this is amazing!"
            },
            {
                username: "Behati",
                profilePicture: "http://placehold.it/80",
                commentText: "Amen Sister!"
            }
        ]
    },
    {
        profileName: "Anonymous Source",
        profilePicture : "https://lh3.googleusercontent.com/-CxXg7_7ylq4/AAAAAAAAAAI/AAAAAAAAAQ8/LhCIKQC5Aq4/s46-c-k-no/photo.jpg",
        postContent : "This is just a test",
        imageSource : "https://s3.us-east-2.amazonaws.com/data-viz-project/1.jpg",
        comments : [
            {
                username: "Bagher",
                profilePicture: "http://placehold.it/80",
                commentText: "this is amazing!"
            },
            {
                username: "Behati",
                profilePicture: "http://placehold.it/80",
                commentText: "Amen Sister!"
            }
        ]
    }
];

var tmpl = document.getElementById("thisID").innerHTML;
var html = Mustache.to_html(tmpl, data);
