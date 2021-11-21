import { Component } from 'react';

interface Props {
  onAddMovie: React.MouseEventHandler<HTMLButtonElement> | undefined,
}
interface State {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

export class NewMovie extends Component<Props, State> {
  state: State = {
    title: '',
    description: '',
    imgUrl: '',
    imdbUrl: '',
    imdbId: '',
  };

  onAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState(state => ({
      ...state,
      [name]: value,
    }));
  };

  render() {
    const {
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    } = this.state;

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={this.onAdd}
        />
        <input
          type="description"
          name="description"
          placeholder="description"
          value={description}
          onChange={this.onAdd}
        />
        {/* <textarea
          name="description"
          id="description"
          placeholder="description"
          value={description}
          onChange={this.onAdd}
        /> */}
        <input
          type="url"
          name="imgUrl"
          placeholder="imgUrl"
          value={imgUrl}
          onChange={this.onAdd}
        />
        <input
          type="url"
          name="imdbUrl"
          placeholder="imdbUrl"
          value={imdbUrl}
          onChange={this.onAdd}
        />
        <input
          type="text"
          name="imdbId"
          placeholder="imdbId"
          value={imdbId}
          onChange={this.onAdd}
        />
        <button
          type="submit"
          onClick={this.props.onAddMovie}
        >
          Add movie
        </button>
      </form>
    );
  }
}
