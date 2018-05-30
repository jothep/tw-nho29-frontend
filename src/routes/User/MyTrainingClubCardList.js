import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List, Card } from 'antd';

const { Meta } = Card;

@connect(({ trainingClub, loading }) => ({
  list: trainingClub,
  loading: loading.models.training_club,
}))
export default class MyTrainingClubCardList extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'trainingClub/fetch',
    });
  }

  render() {
    const { list: { list }, loading } = this.props;

    return (
      <List
        rowKey="id"
        grid={{ gutter: 16, column: 3 }}
        loading={loading}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Card
              style={{ width: 240 }}
            >
              <Meta
                title={item.name}
                description={item.description}
              />
            </Card>
          </List.Item>
        )}
      />);
  }
}
