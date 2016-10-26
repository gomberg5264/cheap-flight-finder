export default class Country {
  code : string;
  name : string;
  seoName : string;
  englishSeoName : string;
  currency : string;
  url : string;

  constructor(code = "", name = "", seoName = "", englishSeoName = "", currency = "", url = "") {
    this.code = code;
    this.name = name;
    this.seoName = seoName;
    this.englishSeoName = englishSeoName;
    this.currency = currency;
    this.url = url;
  }
}
