import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}

interface IList {
  item: {
    background:string
    borderRadius:string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    appBar: string
    borderRadius: string
    palette: {
      text:string
      subtitle:string
   },
   list:IList
  }
}