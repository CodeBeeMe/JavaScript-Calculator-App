//!===Date:06.09.2017===Copyright ©2017 JavaScript code by Cătălin Anghel-Ursu @Madness2aMaze (https://codepen.io/Madness2aMaze)
 - All Rights Reserved=========!

/*MIT License

Copyright (c) 2017 - 2018 Cătălin Anghel-Ursu (https://github.com/Madness2aMaze/JavaScript-Calculator-App)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

$(document).ready(function() {
  $(".shell").removeClass("invisible");
  $(".shell").addClass("anim-calc");
  var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      digits = [],
      calc = [],
      results = 0,
      keys = {"0": "#zero", "1": "#one", "2": "#two", "3": "#three", "4": "#four", "5": "#five", "6": "#six", "7": "#seven", "8": "#eight", "9": "#nine"};

  $.each(index, function(i) {
    $(keys[i]).click(function() {
      //filling the digits sub-arrays with the input digits from the clicked key
      if (/[\+\-\*\/]/g.test(digits[digits.length - 1])) {
        if (digits.length < 15) {
          if (digits[0] === 0) {
            digits.shift();
          }
          digits.push(i);
          var num = digits.join("");
          $(".main").html(num);
        }
        if (calc.length < 27) {
          if (calc[0] === 0) {
            calc.shift();
          }
          calc.push(i);
          var op = calc.join("");
          $(".sec").html(op);
        }
      } else {
        if (digits.length < 15) {
          if (digits[0] === 0) {
            digits.shift();
          }
          digits.push(i);
          var num = digits.join("");
          $(".main").html(num);
        }
        if (calc.length < 27) {
          if (calc[0] === 0) {
            calc.shift();
          }
          calc.push(i);
          var op = calc.join("");
          $(".sec").html(op);
        }
      }
      //console.log(digits);
      //console.log(calc);
      
      $("#all-clear").click(function() {
        digits.splice(0, 15);
        //digits = [];
        calc.splice(0, 27);
        //calc = [];
        digits.pop();
        calc.pop();
        results = 0;
        $(".main").html("0");
        $(".sec").html("0");
      });
      $("#plus").click(function() {
        if (/[\+\*\/\.]/g.test(calc[0])) {
          calc.shift();
        }
        if (/[\+\-\*\/\.]/g.test(calc[calc.length - 1])) {
          calc.pop();
          calc.push("+");
          digits.splice(0, 15);
          $(".sec").html("+");
          results = 0;
        } else {
          calc.push("+");
          digits.splice(0, 15);
          $(".sec").html("+");
          results = 0;
        }
      });
      $("#minus").click(function() {
        if (/[\+\*\/\.]/g.test(calc[0])) {
          calc.shift();
        }
        if (/[\+\-\*\/\.]/g.test(calc[calc.length - 1])) {
          calc.pop();
          calc.push("-");
          digits.splice(0, 15);
          $(".sec").html("&#8722");
          results = 0;
        } else {
          calc.push("-");
          digits.splice(0, 15);
          $(".sec").html("&#8722");
          results = 0;
        }
      });
      $("#times").click(function() {
        if (/[\+\*\/\.]/g.test(calc[0])) {
          calc.shift();
        }
        if (/[\+\-\*\/\.]/g.test(calc[calc.length - 1])) {
          calc.pop();
          calc.push("*");
          digits.splice(0, 15);
          $(".sec").html("*");
          results = 0;
        } else {
          calc.push("*");
          digits.splice(0, 15);
          $(".sec").html("*");
          results = 0;
        }
      });
      $("#divide").click(function() {
        if (/[\+\*\/\.]/g.test(calc[0])) {
          calc.shift();
        }
        if (/[\+\-\*\/\.]/g.test(calc[calc.length - 1])) {
          calc.pop();
          calc.push("/");
          digits.splice(0, 15);
          $(".sec").html("/");
          results = 0;
        } else {
          calc.push("/");
          digits.splice(0, 15);
          $(".sec").html("/");
          results = 0;
        }
      });
    });
  });
  $("#dot").click(function() {
    if (!/[\+\-\*\/\.]/g.test(results)) {
      if (digits[0] !== "." && digits[1] !== "." && digits[2] !== "." && digits[3] !== "." && digits[4] !== "." && digits[5] !== "." && digits[6] !== "." && digits[7] !== "." && digits[8] !== "." && digits[9] !== "." && digits[10] !== "." && digits[11] !== "." && digits[12] !== "." && digits[13] !== "." && digits[14] !== ".") {
        digits.push(".");
        calc.push(".");
        $(".main").html(".");
        $(".sec").html(".");
      }
    }
  });
  $("#backsp").click(function() {
    if (calc.length !== 0) {
      digits.pop();
      calc.pop();
      results = 0;
      var op = calc.join("");
      $(".main").html("0");
      $(".sec").html(op);
      if(calc.length === 0) {
        $(".main").html("0");
        $(".sec").html("0");
      }
    }
    //console.log(digits);
    //console.log(calc);
  });
  $("#equals").click(function() {
    if (/[\+\-\*\/\.]/g.test(calc[calc.length - 1])) {
      calc.pop();
    } else {
      var op = calc.join(""),
          fixedDec = "";          
      results = eval(op);
      var str = results.toString(),
          opLine = op + "=" + str; 
      fixedDec = results.toFixed(8);
      if (/[0]{1,15}\d$/g.test(fixedDec) || /[0]{1,15}\d$/g.test(str)) {
        fixedDec = fixedDec.replace(/[0]{1,15}\d$/g, "");
        //str = str.replace(/[0]{1,15}\d$/g, "");
      }
      digits.splice(0, 15);
      calc.splice(0, 27);
      if (str.length < 15) {
        digits.push(results);
        calc.push(results);
        $(".main").html(results);
        if(!/[\+\-\*\/]/g.test(op)) {
          $(".sec").html(op);
        } else {
          $(".sec").html(op + "=" + results);
        }
        if (results === undefined) {
          digits.splice(0, 15);
          calc.splice(0, 27);
          $(".main").html(0);
          $(".sec").html(0);
        }
      } else {
        digits.push(fixedDec);
        calc.push(fixedDec);
        $(".main").html(fixedDec);
        if(!/[\+\-\*\/]/g.test(op)) {
          $(".sec").html(op);
        } else {
          $(".sec").html(op + "=" + fixedDec);
        }
        if (fixedDec === undefined) {
          digits.splice(0, 15);
          calc.splice(0, 27);
          $(".main").html(0);
          $(".sec").html(0);
        }
      }
      if (fixedDec.length > 15) {
        $(".main").html("ERR");
        $(".sec").html("ERR");
      }
      if (opLine.length > 27) {
        $(".sec").css("font-size", 12);
      }
      //console.log(opLine.length);
      //console.log(str.length);
    }
  });

  function toggOffToOn() {
    $("<audio></audio>").attr({
      src: "https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3",
      volume: 0.5,
      autoplay: "autoplay"
    });
    $(".icons").addClass("anim-icons");
    $(".main").removeClass("invisible");
    $(".sec").removeClass("invisible");
    $(".main").addClass("anim-display");
    $(".sec").addClass("anim-display");
    $(".pow").removeClass("glow");
    //$(".icons").css("opacity", "0.8");
    $(".pow").css("color", "#fff");
    //$(".key").css("color", "#fff");
    digits.splice(0, 15);
    calc.splice(0, 27);    
    results = 0;
    $(".main").html("0");
    $(".sec").html("0");
    $(this).one("click", toggOnToOff);
  }
  function toggOnToOff() {
    $(".shell").addClass("anim-calc-out");
    $(".title").addClass("glow")
    $(".icons").removeClass("anim-icons");
    $(".main").addClass("invisible");
    $(".sec").addClass("invisible");
    $(".main").removeClass("anim-display");
    $(".sec").removeClass("anim-display");
    $(".pow").addClass("glow");
    $(".pow").css("color", "none");
    //$(".key").css("color", "rgb(61, 67, 76)");
    //$(".icons").css("opacity", "0.2");
    digits.splice(0, 15);
    calc.splice(0, 27);
    results = 0;
    $(this).one("click", toggOffToOn);
  }
  $(".toggle").one("click", toggOffToOn);
  
  $(".title").click(function() {
    $(".title").removeClass("glow");
    $(".shell").removeClass("anim-calc-out");
    $(".shell").addClass("anim-calc");
  });  
});
