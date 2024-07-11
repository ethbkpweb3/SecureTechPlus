$.validator.addMethod("alphanumer", function(value, element) {
    return this.optional(element) || /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(value);
}, "Alphanumeric only please");

$.validator.addMethod("lettersonlys", function(value, element) {
    return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
}, "Letters only please");

$.validator.addMethod("customemail", function(value, element) {
    return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
}, "Please enter a valid email address.");

$.validator.addMethod('onecheck', function(value, ele) {
    return $("input:checked").length >= 1;
}, 'Please Select Atleast One CheckBox');

$.validator.addMethod("noHTML_tags", function(value, element) {
    if (this.optional(element) || /<\/?[^>]+(>|$)/g.test(value)) {
        return false;
    } else {
        return true;
    }
}, "HTML tags are Not allowed");

$("#contact_us_form").validate({
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
            customemail: true,
        },
        phone: {
            required: true,
            number: true,
            // max: 10,
        },
        whatsapp: {
            required: true,
            number: true,
            // max: 10,
        },
        telegram: {
            required: true,
        },
        messge: {
            required: true,
            noHTML_tags: true,
        },

        service: {
            required: true
            // onecheck: true
        },
    },
    messages: {
        name: {
            required: "Please fill username"
        },
        email: {
            required: "Please fill email-Id"
        },
        phone: {
            required: "Please fill the Phone number"
        },
        whatsapp: {
            required: "Please fill the WhatsApp number"
        },
        telegram: {
            required: "Please fill the Telegram"
        },
        service: {
            required: "Please Select Service"
        },
        messge: {
            required: "Please fill your queries"
        }
    },
    submitHandler: function(form) {
        var dataform = $('#contact_us_form').serialize();

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            data: dataform,
            url: site_url + '/submit_contact',
            beforeSend: function() {
                $('#contact_us_form .sto_submitbtn').html('Loading....');
                $('#contact_us_form .sto_submitbtn').prop('disabled', true);
            },
            success: function(data) {
                $('#contact_us_form .sto_submitbtn').html('Submit');
                $('#contact_us_form .sto_submitbtn').prop('disabled', false);

                if (data == 1) {
                    $("#contact_us_form .submit_msg").html('<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Thank you for contacting us. Our support team will get back to you as soon as possible!!! </div>');
                    $('#contact_us_form').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else if (data == 2) {
                    $("#contact_us_form .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> You have just submitted your details. Please try again later. </div>');
                    $('#contact_us_form').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else {
                    $("#contact_us_form .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> Some problem Please try again later </div>');
                }
            }
            // beforeSend: function () {
            //     $('#contact_submit').hide();
            // },
            // success: function (output) {
            //     $('#contact_submit').show();
            //     if (parseInt(output) == 1) {
            //         $(".input-error").hide();
            //         $(".input-success").show();
            //         $(".input-success").fadeOut(5000);
            //         $('#contact_us_form')[0].reset();
            //     } else if (parseInt(output) == 2) {
            //         $(".input-success").hide();
            //         $(".input-error").show();
            //         $('.input-error').fadeOut(6000);
            //     }
            //     setTimeout(function(){window.location.reload();},4000);

            // }
        });
    }
});



$("#contactForm").validate({
    ignore: [],
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
            customemail: true,
        },
        phone: {
            required: true,
            number: true,
            // max: 10,
        },
        whatsapp: {
            required: true,
            number: true,
            // max: 10,
        },
        telegram: {
            required: true,
        },
        messge: {
            required: true,
            noHTML_tags: true,
        },

        service: {
            required: true
            // onecheck: true
        },
    },
    messages: {
        name: {
            required: "Please fill username"
        },
        email: {
            required: "Please fill email-Id"
        },
        phone: {
            required: "Please fill the Phone number"
        },
        whatsapp: {
            required: "Please fill the WhatsApp number"
        },
        telegram: {
            required: "Please fill the Telegram"
        },
        service: {
            required: "Please Select Service"
        },
        messge: {
            required: "Please fill your queries"
        }
    },
    submitHandler: function(form) {
        var dataform = $('#contactForm').serialize();

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            data: dataform,
            url: site_url + '/submit_contact',
            beforeSend: function() {
                $('#contactForm .submit_btn').html('Loading....');
                $('#contactForm .submit_btn').prop('disabled', true);
            },
            success: function(data) {
                $('#contactForm .submit_btn').html('Submit');
                $('#contactForm .submit_btn').prop('disabled', false);

                if (data == 1) {
                    $("#contactForm .submit_msg").html('<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Thank you for contacting us. Our support team will get back to you as soon as possible!!! </div>');
                    $('#contactForm').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else if (data == 2) {
                    $("#contactForm .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> You have just submitted your details. Please try again later. </div>');
                    $('#contactForm').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else {
                    $("#contactForm .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> Some problem Please try again later </div>');
                }
            }
            // beforeSend: function () {
            //     $('#contact_sub').hide();
            // },
            // success: function (output) {
            //     $('#contact_sub').show();
            //     if (parseInt(output) == 1) {
            //         $("#input-error").hide();
            //         $("#input-success").show();
            //         $("#input-success").fadeOut(5000);
            //         $('#contactForm')[0].reset();
            //     } else if (parseInt(output) == 2) {
            //         $("#input-success").hide();
            //         $("#input-error").show();
            //         $('#input-error').fadeOut(6000);
            //     }
            //     setTimeout(function(){window.location.reload();},4000);

            // }
        });
    }
});



$("#contactus").validate({
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
            customemail: true,
        },
        phone: {
            required: true,
            number: true,
            // max: 10,
        },
        whatsapp: {
            required: true,
            number: true,
            // max: 10,
        },
        telegram: {
            required: true,
        },
        messge: {
            required: true,
            noHTML_tags: true,
        },

        service: {
            required: true
            // onecheck: true
        },
    },
    messages: {
        name: {
            required: "Please fill username"
        },
        email: {
            required: "Please fill email-Id"
        },
        phone: {
            required: "Please fill the Phone number"
        },
        whatsapp: {
            required: "Please fill the WhatsApp number"
        },
        telegram: {
            required: "Please fill the Telegram"
        },
        service: {
            required: "Please Select Service"
        },
        messge: {
            required: "Please fill your queries"
        }
    },
    submitHandler: function(form) {
        var dataform = $('#contactus').serialize();
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            data: dataform,
            url: site_url + '/submit_contact',
            beforeSend: function() {
                $('#contactus .submit_btn').html('Loading....');
                $('#contactus .submit_btn').prop('disabled', true);
            },
            success: function(data) {
                $('#contactus .submit_btn').html('Submit');
                $('#contactus .submit_btn').prop('disabled', false);

                if (data == 1) {
                    $("#contactus .submit_msg").html('<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Thank you for contacting us. Our support team will get back to you as soon as possible!!! </div>');
                    $('#contactus').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else if (data == 2) {
                    $("#contactus .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> You have just submitted your details. Please try again later. </div>');
                    $('#contactus').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else {
                    $("#contactus .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> Some problem Please try again later </div>');
                }
            }
        });
    }
});


$("#blog_side_contactus").validate({
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
            customemail: true,
        },
        country: {
            required: true,
        },
        phone: {
            required: true,
            number: true,
            // max: 10,
        },
        whatsapp: {
            required: true,
            number: true,
            // max: 10,
        },
        telegram: {
            required: true,
        },
        messge: {
            required: true,
            noHTML_tags: true,
        },

    },
    messages: {
        name: {
            required: "Please fill username"
        },
        email: {
            required: "Please fill email-Id"
        },
        country: {
            required: "Please select country"
        },
        phone: {
            required: "Please fill the Phone number"
        },
        whatsapp: {
            required: "Please fill the WhatsApp number"
        },
        telegram: {
            required: "Please fill the Telegram"
        },
        messge: {
            required: "Please fill your queries"
        }
    },
    submitHandler: function(form) {
        var dataform = $('#blog_side_contactus').serialize();
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            data: dataform,
            url: site_url + '/submit_contact',
            beforeSend: function() {
                $('#blog_side_contactus .submit_btn').html('Loading....');
                $('#blog_side_contactus .submit_btn').prop('disabled', true);
            },
            success: function(data) {
                $('#blog_side_contactus .submit_btn').html('Submit');
                $('#blog_side_contactus .submit_btn').prop('disabled', false);

                if (data == 1) {
                    $("#blog_side_contactus .submit_msg").html('<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Thank you for contacting us. Our support team will get back to you as soon as possible!!! </div>');
                    $('#blog_side_contactus').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else if (data == 2) {
                    $("#blog_side_contactus .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> You have just submitted your details. Please try again later. </div>');
                    $('#blog_side_contactus').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else {
                    $("#blog_side_contactus .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> Some problem Please try again later </div>');
                }
            }
        });
    }
});

$("#left_cont_form").validate({
    ignore: [],
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
            customemail: true,
        },

        phone: {
            required: true,
            number: true,
            // max: 10,
        },
        whatsapp: {
            required: true,
            number: true,
            // max: 10,
        },
        telegram: {
            required: true,
        },

        messge: {
            required: true,
            noHTML_tags: true,
        },


    },
    messages: {
        enquiry_name: {
            required: "Please fill username"
        },
        enquiry_email: {
            required: "Please fill email-Id"
        },
        phone: {
            required: "Please fill the Phone number"
        },
        whatsapp: {
            required: "Please fill the WhatsApp number"
        },
        telegram: {
            required: "Please fill the Telegram"
        },
        messge: {
            required: "Please fill your queries"
        }
    },
    submitHandler: function(form) {
        var dataform = $('#left_cont_form').serialize();

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            data: dataform,
            url: site_url + '/submit_contact',
            beforeSend: function() {
                $('#left_cont_form .submit_btn').val('Loading....');
                $('#left_cont_form .submit_btn').prop('disabled', true);
            },
            success: function(data) {
                $('#left_cont_form .submit_btn').val('Send');
                $('#left_cont_form .submit_btn').prop('disabled', false);

                if (data == 1) {
                    $("#left_cont_form .submit_msg").html('<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Thank you for contacting us. Our support team will get back to you as soon as possible!!! </div>');
                    $('#left_cont_form').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else if (data == 2) {
                    $("#left_cont_form .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> You have just submitted your details. Please try again later. </div>');
                    $('#left_cont_form').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else {
                    $("#left_cont_form .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> Some problem Please try again later </div>');
                }
            }

        });
    }
});

$("#side_popup").validate({
    ignore: [],
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
            customemail: true,
        },
        country: {
            required: true,
        },
        phone: {
            required: true,
            number: true,
            // max: 10,
        },
        whatsapp: {
            required: true,
            number: true,
            // max: 10,
        },
        telegram: {
            required: true,
        },
        enquiry_message: {
            required: true,
            noHTML_tags: true,
        },
        messge: {
            required: true,
        },


    },
    messages: {
        enquiry_name: {
            required: "Please fill username"
        },
        enquiry_email: {
            required: "Please fill email-Id"
        },
        phone: {
            required: "Please fill the Phone number"
        },
        whatsapp: {
            required: "Please fill the WhatsApp number"
        },
        telegram: {
            required: "Please fill the Telegram"
        },
        messge: {
            required: "Please fill your queries"
        }
    },
    submitHandler: function(form) {
        var dataform = $('#side_popup').serialize();

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            data: dataform,
            url: site_url + '/submit_contact',
            beforeSend: function() {
                $('#side_popup .submit_btn').html('Loading....');
                $('#side_popup .submit_btn').prop('disabled', true);
            },
            success: function(data) {
                $('#side_popup .submit_btn').html('Submit');
                $('#side_popup .submit_btn').prop('disabled', false);

                if (data == 1) {
                    $("#side_popup .submit_msg").html('<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Thank you for contacting us. Our support team will get back to you as soon as possible!!! </div>');
                    $('#side_popup').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else if (data == 2) {
                    $("#side_popup .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> You have just submitted your details. Please try again later. </div>');
                    $('#side_popup').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else {
                    $("#side_popup .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> Some problem Please try again later </div>');
                }
            }

        });
    }
});


$("#notification_form").validate({
    ignore: [],
    rules: {

        email: {
            required: true,
            email: true,
            customemail: true,
        },

    },
    messages: {

        email: {
            required: "Please fill email-Id"
        },

    },
    submitHandler: function(form) {
        var dataform = $('#notification_form').serialize();
        var cate_name = $("#cate_name").val();
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            data: dataform,
            url: site_url + '/add_subs',
            beforeSend: function() {
                $('#notification_form .submit_btn').html('Loading....');
                $('#notification_form .submit_btn').prop('disabled', true);
            },
            success: function(data) {
                $('#notification_form .submit_btn').html('Submit');
                $('#notification_form .submit_btn').prop('disabled', false);

                if (data == 1) {
                    $("#notification_form .submit_msg").html('<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>You have successfully filled in the essential details. Now you can effortlessly grab our regular updates on <b style="font-size=20px">' + cate_name + '</b>  through the mail. Keep in touch with us to convert your business ideas into reality </div>');
                    $('#notification_form').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 8000);
                } else if (data == 0) {
                    $("#notification_form .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> Already Subscribed. </div>');
                    $('#notification_form').trigger("reset");

                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);
                } else {
                    $("#notification_form .submit_msg").html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> Some problem Please try again later </div>');
                }
            }

        });
    }
});