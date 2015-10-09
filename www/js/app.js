    $(document).ready(function(){
	
    
    var siteurl = 'http://al-dawrat.com/js/app/';
    
    $(".js_header_courses").click(function() {

        $('.loading').show();
        $('.data').hide();
        $.post(siteurl+'courses',{  },function(data){

                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        );
        return false;
    });
    $("body").on("click",".js_course", function(){
        
        var id = $(this).attr('id');
        
        $('.data').hide();
        $('.loading').show();
        $.post(siteurl+'course',{ 'id':id },function(data){

                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        );
        return false;
    });
    $("body").on("click",".js_course_sub", function(){
		
        var btn = $(this);
		var course_id = $('.js_course').val();
		var name = $('.js_name').val();
		var email = $('.js_email').val();
		var mobile = $('.js_mobile').val();
		var country = $('.js_country').val();
		var city = $('.js_city_v').val();
		var sex = $('.js_sex').val();
		
		if ( name=='' ){
			alert('المرجو إدخال الإسم الكامل');
		}else if( email=='' ){
			alert('المرجو إدخال بريدك الإلكتروني');
		}else if( country=='' ){
			alert('المرجو تحديد الدولة');
		}else if( city==''){
			alert('المرجو تحديد المدينة'+city);
		}else if( sex=='' ){
			alert('المرجو تحديد الجنس');
		}else{
			
			$.post(siteurl+'course_subscribe',{ 
                    course_id:course_id, 
                    name:name, 
                    email:email, 
                    mobile:mobile, 
                    country:country, 
                    city:city, 
                    sex:sex 
                },
            function( data ){
                
                var obj = jQuery.parseJSON( data );
                
                if ( obj.success==1 ){
                    $('.js_sub_form input').val('');
                    $('.js_sub_form select').val('');
                }
                
				alert(obj.msg);
			})
		}
		
		return false;
	})
    $("body").on("click",".js_courses_search", function(){
        
        var d = $(this).attr('d');
        var section = $(".js_section").val();
        var country = $(".js_country").val();
        var city = $(".js_city_v").val();
        var paid = $(".js_paid").val();
        var date = $(".js_date").val();
        
        
        $('.data_content').html('');
        $('.js_courses_search').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        
        $.post(siteurl+'courses/search/',{ 'section':section,'country':country,'city':city,'paid':paid,'date':date, },function(data){
                
                $('.js_courses_search').html('<span style="color:#fff;">إبحث</span>');
                
                $('.data_content').html(data).hide().fadeIn(200);
            }
        );
        return false;
    })
    $("body").on("click",".js_courses_pagination", function(){
        
        var t = $(this);
        
        var d = $(this).attr('d');
        var page_is = $(this).attr('page_is');
        var section = $(this).attr('section');
        var country = $(this).attr('country');
        var city = $(this).attr('city');
        var paid = $(this).attr('paid');
        var date = $(this).attr('date');
        
        $('.js_courses_pagination').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        $.post(siteurl+'courses/pages/',{ 'page_is':page_is,'section':section,'country':country,'city':city,'paid':paid,'date':date, },function(data){
                
                $('.js_courses_pagination').hide();
                $('.pagination_data').append(data);
            }
        );
        return false;
    })
    
    $(".js_header_organizers").click(function() {

        $('.loading').show();
        $('.data').hide();
        $.post(siteurl+'organizers',{  },function(data){

                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        );
        return false;
    });
    $("body").on("click",".js_organizer", function(){
        
        var id = $(this).attr('id');
        
        $('.data').hide();
        $('.loading').show();
        $.post(siteurl+'organizer',{ 'id':id },function(data){

                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        );
        return false;
    });
    $("body").on("click",".js_organizers_search", function(){
        
        var d = $(this).attr('d');
        var country = $(".js_country").val();
        var city = $(".js_city_v").val();
        
        
        $('.data_content').html('');
        $('.js_organizers_search').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        
        $.post(siteurl+'organizers/search/',{ 'country':country,'city':city },function(data){
                
                $('.js_organizers_search').html('<span style="color:#fff;">إبحث</span>');
                
                $('.data_content').html(data).hide().fadeIn(200);
            }
        );
        return false;
    })
    $("body").on("click",".js_organizers_pagination", function(){
        
        var t = $(this);
        
        var d = $(this).attr('d');
        var page_is = $(this).attr('page_is');
        var country = $(this).attr('country');
        var city = $(this).attr('city');
        
        $('.js_organizers_pagination').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        $.post(siteurl+'organizers/pages/',{ 'page_is':page_is,'country':country,'city':city },function(data){
                
                $('.js_organizers_pagination').hide();
                $('.pagination_data').append(data);
            }
        );
        return false;
    })
    
    
    $(".js_header_trainers").click(function() {

        $('.loading').show();
        $('.data').hide();
        $.post(siteurl+'trainers',{  },function(data){

                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        );
        return false;
    });
    $("body").on("click",".js_trainer", function(){
        
        var id = $(this).attr('id');
        
        $('.data').hide();
        $('.loading').show();
        $.post(siteurl+'trainer',{ 'id':id },function(data){

                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        );
        return false;
    });
    $("body").on("click",".js_trainers_search", function(){
        
        var d = $(this).attr('d');
        var country = $(".js_country_").val();
        var city = $(".js_city_v").val();
        
        $('.data_content').html('');
        $('.js_trainers_search').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        
        $.post(siteurl+'trainers/search/',{ 'country':country,'city':city },function(data){
                
                $('.js_trainers_search').html('<span style="color:#fff;">إبحث</span>');
                
                $('.data_content').html(data).hide().fadeIn(200);
            }
        );
        return false;
    })
    $("body").on("click",".js_trainers_pagination", function(){
        
        var t = $(this);
        
        var d = $(this).attr('d');
        var page_is = $(this).attr('page_is');
        var country = $(this).attr('country');
        var city = $(this).attr('city');
        
        $('.js_trainers_pagination').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        $.post(siteurl+'trainers/pages/',{ 'page_is':page_is,'country':country,'city':city },function(data){
                
                $('.js_trainers_pagination').hide();
                $('.pagination_data').append(data);
            }
        );
        return false;
    })
        
    $(".js_header_training_rooms").click(function() {

        $('.loading').show();
        $('.data').hide();
        $.post(siteurl+'training_rooms',{  },function(data){

                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        );
        return false;
    });
    $("body").on("click",".js_training_room", function(){
        
        var id = $(this).attr('id');
        
        $('.data').hide();
        $('.loading').show();
        $.post(siteurl+'training_room',{ 'id':id },function(data){

                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        );
        return false;
    });
    $("body").on("click",".js_training_rooms_search", function(){
        
        var d = $(this).attr('d');
        var country = $(".js_country").val();
        var city = $(".js_city_v").val();
        
        $('.data_content').html('');
        $('.js_training_rooms_search').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        
        $.post(siteurl+'training_rooms/search/',{ 'country':country,'city':city },function(data){
                
                $('.js_training_rooms_search').html('<span style="color:#fff;">إبحث</span>');
                
                $('.data_content').html(data).hide().fadeIn(200);
            }
        );
        return false;
    })
    $("body").on("click",".js_training_rooms_pagination", function(){
        
        var t = $(this);
        
        var d = $(this).attr('d');
        var page_is = $(this).attr('page_is');
        var country = $(this).attr('country');
        var city = $(this).attr('city');
        
        $('.js_training_rooms_pagination').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        $.post(siteurl+'training_rooms/pages/',{ 'page_is':page_is,'country':country,'city':city },function(data){
                
                $('.js_training_rooms_pagination').hide();
                $('.pagination_data').append(data);
            }
        );
        return false;
    })
    
    $("body").on("click",".js_tabs", function(){
        
        var d = $(this).attr('d');
        var video = $("#playerid").attr("d");
        
        if ( d==1 ){
            $('.js_img').show();
        }
        else{
            $('.js_img').hide();
        }
        
        
        if ( d==3 ){
            $("#playerid").attr("src","");
            $("#playerid").attr("src",video);
        }
        else{
            $("#playerid").attr("src","");
        }
        
        
        $('.js_tabs').removeClass('active');
        $(this).addClass('active');
        

        $('.tabs_page').slideUp(400).hide(1000);
        $('.js_tabs_p_'+d).slideDown(600);


    })
    $("body").on("change",".js_country", function(){
		
        var country = $(this).val();
		
		$('.js_city select').addClass('ajax_loader_small');
		
		$.post("http://localhost/dawarat/js/city", { country:country },
			function(data){
				$('.js_city').html(data);
			}
		);
	});
    
    $(".js_header_contact_us").click(function() {
        
        $('.data').hide();
        $('.loading').show();
        $.post(siteurl+'contact_us',{ },function(data){

                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        );
        return false;
    });
    
	$(".js_header_register").click(function() {
        
        $('.data').hide();
        $('.loading').show();
        $.post(siteurl+'register',{ },function(data){

                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        );
        return false;
    });
	$("body").on("change",".js_membership", function(){
		if ( $(this).val()==1 ){
			$('.js_conditions').show();
		}else{
			$('.js_conditions').hide();
		}
	})
	$("body").on("click",".js_register_send", function(){
        
        var name = $('.js_name').val();
        var email = $('.js_email').val();
        var mobile = $('.js_mobile').val();
        var membership = $('.js_membership').val();
        var accept = $('.js_accept').val();
        
		if ( name=='' ){
			alert('المرجو إدخال الإسم الكامل');
		}else if( email=='' ){
			alert('المرجو إدخال بريدك الإلكتروني');
		}else if( membership=='' ){
			alert('المرجو تحديد نوع العضوية');
		}
		else{
			
			$.post(siteurl+'register_send',{ 
                    'name':name, 
                    'email':email, 
                    'mobile':mobile, 
                    'membership':membership,
                    'accept':accept 
                },
            function( data ){
                
                var obj = jQuery.parseJSON( data );
                
                if ( obj.success==1 ){
                    $('.js_sub_form input').val('');
                    $('.js_sub_form select').val('');
                }
                
				$('.js_msg').html(obj.msg);
			})
		}
        return false;
    });
	$("body").on("click",".close", function(){
		$('.js_msg').html('');
	})
	
});