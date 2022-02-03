import { View, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import tw from 'tailwind-react-native-classnames';
import YoutubePlayer from 'react-native-youtube-iframe';

const MastermindVideos = () => {
	return (
		<SafeAreaView>
			<Header title="Mastermind Videos" />
			<View style={tw`m-5`}>
				<YoutubePlayer
					style={tw``}
					height={200}
					play={false}
					videoId={'24xpTmaPOdY'}
				/>
			</View>

			<View style={tw`m-5`}>
				<YoutubePlayer
					style={tw``}
					height={200}
					play={false}
					videoId={'MqDlsjc8GLo'}
				/>
			</View>

			<View style={tw`m-5`}>
				<YoutubePlayer
					style={tw``}
					height={200}
					play={false}
					videoId={'QaYts9sPmcY'}
				/>
			</View>
		</SafeAreaView>
	);
};

export default MastermindVideos;
