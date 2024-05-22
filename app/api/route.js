export function GET(request) {
  console.log(request);

  //localhost:3000/api로 접속하게 되면 아래의 response을 얻게 된다
  return new Response("Hello!");
}

// export function POST() {}
