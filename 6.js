let name = "Mithun";
let email = "mithun.s@pw.live";
let age = "21";
if (typeof name !== "string" || typeof email !== "string")
{
  console.log("Name and Email should be a string..");
} 
else if (typeof age !== "number") 
{
  console.log("Age should be a number..");
} 
else
{
  console.log("Good to go");
}