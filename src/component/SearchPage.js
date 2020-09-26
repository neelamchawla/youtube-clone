import React from 'react';
import '../css/searchPage.css';

import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

export default function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage_filter">
            <TuneIcon />
            <h2>Filter</h2>
        </div>
        
        <hr/>

        <ChannelRow
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTivkv9Gcw7giuni4eoIjWBMPg2J5eJRTvSeg&usqp=CAU"
        channel="John Doe"
        verified
        subs="65K"
        noOfVideos={382}
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        />

        <hr/>

        <VideoRow
        views="1.4M "
        subs=" 659K "
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        timestamp="59 seconds ago"
        channel="John Doe"
        title="Youtube Clone build with REACT JS"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIvBwMQtimLsmfRJEeJgM2RLYySAEVxoItdw&usqp=CAU"
        />

      <VideoRow 
      image="https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRU1Pj9YW7m4LfiSEaPp8XAv_E-h5bUajmy7Q&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIvBwMQtimLsmfRJEeJgM2RLYySAEVxoItdw&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmdw4kpU3Nx8RWfMKUAX3lfSW4K0rpurOh_g&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtVQ3o2DKnx-J2HxLHkIioTAvRYdhPlWxtIQ&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeLvsQcXEuGlSdTtDG4GQ3IrDhF5f4TopA-g&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTivkv9Gcw7giuni4eoIjWBMPg2J5eJRTvSeg&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrLY7JqE_435WPfvcHTeYOcqI_KxFTuHcMyg&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGRxFtqR3bpxOgGBoKOO28sBQmAHCeuhuU8A&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDEEhkM40AH--Btr8Y2WeqSE4ESxcNBRAoCA&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy4aRTZv4sQZmvTG75ITcptM25a1NFjKEu9g&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <VideoRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCZ3pBKi0B5DwBt3Luni0MQaFKfQbAacqsgQ&usqp=CAU"
      title="Become a web developer"
      channel="John Doe"
      views="2.3M Views"
      timestamp="3 days ago"
      subs=" 659K "
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
    </div>
  );
}
