"use client"


export default function session(){
  if(typeof window !== 'undefined')
  return sessionStorage.getItem('login') !== null;
  else console.log("errororororor")
}