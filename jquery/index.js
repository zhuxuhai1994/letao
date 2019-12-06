$(document).ready(function() {
    $(document).on('click', '.daohangbaerTip li', function() {
        $(this).addClass('bbq');
        $(this).siblings('li').removeClass('bbq');
        var world = $(this).attr('vttr');
        console.log(world);
        if (world == "actice") {
            $('.comonbancon').show();
            $('.comonbanconT').hide();
        } else {
            $('.comonbancon').hide();
            $('.comonbanconT').text(world);
            $('.comonbanconT').show();
        }
    })

    // var b = '他温柔的对我说："你个\n\'小傻瓜\'"。我笑了。'
    // console.log(b);

    // var day = + prompt("输入星期几")
    // // var function = fun(day){
    //   switch(day){
    //     case 1:
    //     console.log('星期1');
    //     break;
    //     case 2:
    //     console.log('星期2');
    //     break;
    //     case 3:
    //     console.log('星期3');
    //     break;
    //     case 4:
    //     console.log('星期4');
    //     break;
    //     case 5:
    //     console.log('星期5');
    //     break;
    //     case 6:
    //     console.log('星期6');
    //     break;
    //     case 7:
    //     console.log('星期7');
    //     break;
    //     default:
    //     console.log("非法数字");
    //     break;
    //   }
    
    // console.log(day);
    // var i =1;
    // var  sun =0; 
    // while(i <= 100){
    //   sun += i;
    //   i++;
    //   console.log(i)
    //   console.log(sun)
    // }


    // do{
    //   if ( i % 3 ===0) {
    //     sun += i;
    //   }
    //   i++; 

    // }while(i<=100)

    //   while(i<=100){
    //     if ( i % 3 ===0){
    //       sun+= i;
    //     }
    //     i++;
    //   }
    // console.log(sun);
    // while(i<=100){
    //   if
    // }

    //  var array = [1,3,4,5,6]
    //  var avg;
    //  for(var i =0;i<array.length;i++){

    //    sum += array[i]
    //  }
    // avg = sum/array.length;
    // console.log(avg)
    // var array = [6,1,9,3]
    //  var array = [9 6    3]
    //   var array = [3,6,9,1]
    //    var array = [3,6,1,9]
    // var max=array[0];
    // var maxid;
    // var min =array[0];
    // var minid;
    // var str = '';
    // var arrrrr= [];
    // var arrnew = [];
    // for (var i = 0; i < array.length-1; i++) { 
    //     for (var j = 1; j< array.length-i; j++) {
    //       if(array[i]>array[j+i]){
    //         var tem = array[i];
    //         array[i] = array[j+i];
    //         array[j+i] = tem;
    //       }
    //     }
        // 输出最大值
        // if(max<array[i]){
        //  max =array[i];
        //  maxid= i+1;
        // }
        // if (min>array[i]) {
        //  min = array[i];
        //  minid= i+1;
        // }
        // str += array[i]+'||';
        // if()
        // if(array[i] !== 0){·

        //  arrrrr[arrrrr.length] = array[i];
        // }
        // arrbb[array.length-(i+1)] = array[i]
        // if( array[i]%2 == 0){
        // arrnew[arrnew.length] = array[i-1];
        // }   


    // }
    // console.log("最大数是："+max+"位置是："+maxid +"最小数是："+min+"位置是："+minid)
    // console.log(array)
    // var  agee  = prompt("请输入你的年龄");
    // if (Number(agee)) {
                                             
    //    alert(agee)
    // }else{

    //    alert("你输入的不是数字")
    // }

})
