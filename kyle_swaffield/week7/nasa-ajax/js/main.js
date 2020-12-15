console.log("Test")
$(document).ready(function(){
  $('#loading').hide();
    //1. Submit buttom clicked
    $('#doSearch').click(function() {
      $('#loading').show();
      $('#details').hide();
      $('#backBut').hide();
      $('#results').show().empty();
      //2. Get seach text
      const searchText = $('#searchText').val();
      // console.log(searchText);

      //3. match URL with search string
      $.getJSON(`https://images-api.nasa.gov/search?q=${searchText}`)
        .done(function(search){
          $('#results').empty();
          // console.log(search.collection.items[1].data[0].title);
          const number = 0;
          search.collection.items.forEach(function(item,i){
            const title = item.data[0].title;
            const nasa_id = item.data[0].nasa_id;
            const description = item.data[0].description;
            const image_url = item.links[0].href;
            console.log(title);
            const $rowTop = $(`<div class="row">`);
            const $imageResult = $(`
                <div class="col-sm-4">
                  <div class="panel panel-primary">
                    <div class="panel-heading titles" nasa_id="${ nasa_id }">${ title }</div>
                    <div class="panel-body"><img src="${ image_url }" class="img-responsive titles" style="width:100%" alt="Image" nasa_id="${ nasa_id }"></div>
                    <div class="panel-footer titles" nasa_id="${ nasa_id }">${ description }</div>
                  </div>
                </div>
              `);
              $('#loading').hide();
              $('#results').append($imageResult);
          });
        })
        .fail(console.warn);
    }); //end of search click function

    $(document).on('click','.titles',function(){
      $('#loading').show();
      $('#results').hide();
      const nasa_id = $(this).attr('nasa_id');
      const url = `https://images-api.nasa.gov/asset/${ nasa_id }`

      $.getJSON(url)
      .done(function(result){
        console.log(result.collection);
        const url = result.collection.items[0].href;
        const $back = $(`<button id="goBack">&lt;&lt; Back</button>`);
        const $original = $(`
          <img class="" src="${url}" alt="" style="width:92vw">
          `);
        $('#loading').hide();
        $('#details').html($original).show();
        $('#backBut').html($back).show();
      })
      .fail(console.warn);
    });//end h3 click

    $(document).on('click','#goBack', function(){
      $('#details').hide();
      $('#backBut').hide();
      $('#results').show();
    });
});
