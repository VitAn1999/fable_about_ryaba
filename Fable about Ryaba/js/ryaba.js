const fableObj = {
  "text":
  ["Жили-были {var1} да {var2}. ",
  "Была у них {var3}. ",
  "Снесла {var3} {var4}, не простое - золотое ",
  "- {var1} бил, бил - не разбил ",
  "- {var2} била, била - не разбила, ",
  "{var5} бежала, {var6} задела, {var4} упало и разбилось. ",
  "{var1} плачет, {var2} плачет, а {var3} кудахчет: ",
  "{speach}"
]}

$("#button-fetch").click(function() {
  const $result = $("#result");
  $result.html(fableObj.text);
});

const var1Input = $("input[name=var1]");
const var2Input = $("input[name=var2]");
const var3Input = $("input[name=var3]");
const var4Input = $("input[name=var4]");
const var5Input = $("input[name=var5]");
const var6Input = $("input[name=var6]");
const speachInput = $("input[name=speach]");

$("#button-exchange").click(function() {
  const var1 = var1Input.val();
  const var2 = var2Input.val();
  const var3 = var3Input.val();
  const var4 = var4Input.val();
  const var5 = var5Input.val();
  const var6 = var6Input.val();
  const speach = speachInput.val();

  const fableObj2 = {
    "text":
    [`Жили-были ${var1} да ${var2}. `,
    `Была у них ${var3}. `,
    `Снесла ${var3} ${var4}, не простое - золотое `,
    `- ${var1} бил, бил - не разбил `,
    `- ${var2} била, била - не разбила, `,
    `${var5} бежала, ${var6} задела, ${var4} упало и разбилось. `,
    `${var1} плачет, ${var2} плачет, а ${var3} кудахчет: `,
    `${speach}`]
  }
  const $result = $("#result");
  $result.html(fableObj2.text);
});

$(document).ready(function() {
});