
$(document).ready(function() {
    $('#registerForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            password: {
                validators: {
                    identical: {
                        field: 'confirmPassword',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            }
        }
    });
});
$(document).ready(function() {
    $('#attributeForm').bootstrapValidator();
});

$(document).ready(function() {
    $('#postcodeForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            postcode: {
                validators: {
                    zipCode: {
                        country: 'PH',
                        message: 'The value is not valid PHILIPPINES postcode'
                    }
                }
            }
            
        }
    });
});


$(document).ready(function() {
    $('#fieldIconsForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            address: {
                feedbackIcons: 'false',
                validators: {
                    notEmpty: {
                        message: 'The address is required and cannot be empty'
                    }
                }
            },
            city: {
                feedbackIcons: false,
                validators: {
                    notEmpty: {
                        message: 'The city is required and cannot be empty'
                    }
                }
            },
            phone: {
                feedbackIcons: true,
                validators: {
                    notEmpty: {
                        message: 'The phone number is required and cannot be empty'
                    },
                    phone: {
                        country: 'Ph',
                        message: 'The phone number is not valid'
                    }
                }
            }
        }
    });
});

$(document).ready(function() {
    $('#thresholdForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        // Set default threshold for all fields. It is null by default
        threshold: 3,
        fields: {
            fullname: {
                threshold: 10,
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            gender: {
                // The threshold option does not effect to the elements
                // which user cannot type in, such as radio, checkbox, select, etc.
                threshold: 5,
                validators: {
                    notEmpty: {
                        message: 'The summary is required'
                    }
                }
            },
            phone: {
                threshold: 5,
                validators: {
                    notEmpty: {
                        message: 'The phone number is required'
                    },
                    phone: {
                        message: 'The phone number is not valid',
                        country: 'US'
                    }
                }
            },
            address: {
                // The threshold option is not set
                // It will be taken from the form option (which is 3 in this example)
                validators: {
                    notEmpty: {
                        message: 'The city is required'
                    }
                }
            }
        }
    });
});