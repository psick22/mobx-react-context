import React, { useState } from 'react';
import './App.css';
import { useStore } from './store/Context';
import { Row, Col, Divider, Button, Input, Rate } from 'antd';
import { observer } from 'mobx-react';
import Card from './components/Card';
import Modal from 'antd/lib/modal/Modal';

export default observer(function App() {
  const { movieStore } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newRate, setNewRate] = useState(0);

  const onRateChange = value => {
    setNewRate(value);
  };
  const onModalOk = () => {
    movieStore.createMovie(newTitle, newRate);
    setNewRate(0);
    setNewTitle('');
    setIsModalOpen(false);
  };
  const onDelete = id => {
    movieStore.deleteMovie(id);
  };
  const onExistingRateChange = (id, value) => {
    movieStore.changeRate(id, value);
  };

  return (
    <>
      <Row justify='center'>
        <Button type='primary' danger onClick={() => setIsModalOpen(true)}>
          추가하기
        </Button>
      </Row>
      <Divider />
      {movieStore.movies.map(movie => (
        <>
          <Row justify='center'>
            <Card
              key={movie.id}
              title={movie.title}
              rate={movie.rate}
              onChange={value => {
                onExistingRateChange(movie.id, value);
              }}
              onDelete={() => onDelete(movie.id)}
            ></Card>
          </Row>
          <Divider />
        </>
      ))}
      <Modal
        title='추가하기'
        visible={isModalOpen}
        onOk={onModalOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <Input
          placeholder='영화의 이름을 입력해주세요'
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        ></Input>
        <Rate onChange={onRateChange} value={newRate}></Rate>
      </Modal>
    </>
  );
});
