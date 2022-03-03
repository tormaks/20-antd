import { makeObservable, observable, action, toJS, computed } from 'mobx';
import { useParams } from 'react-router-dom';

import { CharType } from '../../models/charType';
import service from './marvelStore.service';

class MarvelStore {
  chars: CharType[] = [];

  search: string = '';

  isLoading: boolean = true;

  isErrorLoading: boolean = false;

  isShowChars: boolean = true;

  showCharsNumber: number = 8;

  isShowButtonMoreChars: boolean = true;

  constructor() {
    makeObservable(this, {
      chars: observable,
      filterChars: computed,
      isLoading: observable,
      isErrorLoading: observable,
      isShowChars: observable,
      search: observable,
      showCharsNumber: observable,
      isShowButtonMoreChars: observable,
      onToggleShowChars: action.bound,
      onShowChars: action.bound,
    });
  }

  async loadData() {
    await service.getSomeData()
      .then((chars) => {
        this.chars = chars;
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
        this.isErrorLoading = true;
      });
  }

  get filterChars(): CharType[] {
    if (this.search.length > 2) {
      this.onToggleButtonShowMoreChars(false);
      return this.chars.filter((char) => char.name.toLowerCase().includes(this.search.toLowerCase()));
    } else {
      this.onToggleButtonShowMoreChars(true);
      return this.chars;
    }
  }

  onToggleButtonShowMoreChars(arg: boolean) {
    this.isShowButtonMoreChars = arg;
  }

  onToggleShowChars() {
    this.isShowChars = !this.isShowChars;
  }

  onShowChars() {
    this.showCharsNumber = this.showCharsNumber + 8;
  }

  handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.search = event.target.value;
  }
}

export default new MarvelStore();
