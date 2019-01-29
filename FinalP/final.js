$( document ).ready(function() {
    
    console.log('Ready')
    
    var teamCode = {
        benfica : 50147,
        cskamoskva : 54266,
        manutd : 52682,
        basel : 59856,
        anderlecht : 50074,
        celtic : 50050,
        bayern : 50037,
        paris : 52747,
        qarabag : 60609,
        chelsea : 52914,
        atletico : 50124,
        roma : 50137,
        sportinglisboa : 50149,
        olympiacos: 2610,
        barcelonaguayaquil : 50080,
        juventus : 50139,
        spartak : 50068,
        maribor : 57490,
        liverpoolmontevideo : 7889,
        sevilla : 52714,
        feyenoord : 52749,
        donezk : 52707,
        mancity : 52919,
        napoli : 50136,
        porto : 50064,
        besiktas : 50157,
        leipzig : 2603790,
        monaco : 50023,
        apoel : 50118,
        dortmund : 52758,
        tottenham : 1652,
        madrid : 50051
    }
    $.ajax({
        url: "https://raw.githubusercontent.com/openfootball/football.json/master/2017-18/cl.groups.json",
        success: function(data) {
            console.log(typeof data)
            var soccer = JSON.parse(data)
            console.log(soccer.groups)
//            var photo = _.take(data, 52)
//            console.log(photo)
//            var sample = _.sample(data)
//        ///////    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//            
            var res = soccer.groups
            for(ii = 0; ii < res.length; ii++){
                var item = res[ii]
                for(k = 0; k < 4; k++){
                    var team = item.teams[k]
                    var imageRender = '<img src=" https://img.uefa.com/imgml/TP/teams/logos/140X140/'+teamCode[team.key]+'.png" class="card-img" />'
                    var titleRender = '<h5 class="card=title">' + team.name + '</h5>'
                    var textRenderer = '<p class="card-text">' + team.country.name + '</p>'
                    var linkRenderer = '<a href="https://www.uefa.com/uefachampionsleague/season=2019/clubs/club='+teamCode[team.key]+'/index.html" class="btn btn-secondary">Introduction</a>'

                    var bodyRenderer = '<div class="card-body color">'+ titleRender + textRenderer + linkRenderer + '</div>'
                    var cardRenderer = '<div class=" space col-12 col-md-4 col-lg-3 " ><div class="card">'+ imageRender + bodyRenderer + '</div></div>'


                    $("#app").append( cardRenderer)
                }
            }
//            var post = _.take(data,50)
//            console.log(post)
//            
//            
//            var res = post
//            for(ii = 0; ii<res.length; ii ++){
//                var item = res[ii]
//                var componentRenderer = '<li class="list-group-item">UserId:  '+item.userId+'. Title:  '+item.title+'. body:   '+item.body+'</li>'
//                $("#posts").append('<ul class="list-group">'+componentRenderer+'</ul>')
//            }
//            var task = _.take(data,50)
//            console.log(task)
//            
//            var res = task
//            for(ii = 0; ii<res.length; ii ++){
//                var item = res[ii]
//                var componentRenderer = '<li class="list-group-item" id="'+ii+'">Id:  '+item.id+'. Title:  '+item.title+'. status:   '+item.completed+'</li>'
//                if(item.completed == true){
//                    $("#task").append('<ul class="list-group list-group-item-dark">'+componentRenderer+'</ul>')
//                }else{
//                    $("#task").append('<ul class="list-group">'+componentRenderer+'</ul>')
//                }
//            }
        }
    })
    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                
                    
        
});
