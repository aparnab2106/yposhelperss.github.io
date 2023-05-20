$(document).ready(function() {
    $(".intercom-reaction").click(function(e) {
      const reactionText = $(this).data('reaction-text');
      const emojiId = 4; // Replace with the appropriate emojiId value
      
      $.ajax({
        url: `http://localhost:8082/user/reactions/${emojiId}`,
        type: 'POST',
        dataType: 'json',
        crossDomain: true,
        method: 'POST',
        data: JSON.stringify({ emojiId: emojiId }),
        headers: {
          'YRUSH-API-SECRET': 'SGqIeuE3mDIns3QymZP-GrMkXuFCrpx9nLkewIUK_Jw', // Replace with your actual authentication key
          'Content-Type': 'application/json'
        },
        success: function(response) {
          console.log('Request successful:', response);
          // Handle the response data here
        },
        error: function(xhr, status, error) {
          console.error('Request failed:', error);
          // Handle the error here
        }
      });
    });
  });
  