import React, { useState } from "react";
import {
	makeStyles,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
	Box,
} from "@material-ui/core";
import Card from "./memberCard/MemberCard";
import membersRepository from "../../../repository/members";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import BackgroundImage from "../../../assets/Imagens/LinhasCinzaClaro.png";
import Styles from "../../../assets/Styles.json";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
	boxTeam: {
		flexGrow: 1,
		backgroundColor: Styles.colors.primary,
		width: "100%",
		backgroundImage: BackgroundImage,
	},
	autoPlay: {
		maxWidth: "100%",
		position: "relative",
	},
	title: {
		color: "white",
		fontWeight: "bold",
		fontSize: 70,
	},
	subtitle: {
		color: "white",
		[theme.breakpoints.up("xs")]: {
			fontSize: 25,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 15,
		},
	},
	team: {
		height: "100%",
		width: "100%",
		maxWidth: 1125,
		marginBottom: 50,
		[theme.breakpoints.up("md")]: {
			minWidth: 800,
		},
	},
	card: {
		marginLeft: 21,
		marginRight: 21,
		maxWidth: 198,
		elevation: 20,
	},
	backgroundLines: {
		position: "relative",
		zIndex: 1,
		height: "100%",
		objectFit: "contain",
		boxSizing: "inline-box",
		overflow: "hidden",
	},
}));

function newRow() {
	const newRow = [];
	return newRow;
}

function newPage() {
	const blankPage = {
		rows: [newRow()],
	};
	return blankPage;
}

function configArrayMembers(members, membersPerRow, rowsPerPage) {
	let pageIndex = 0;
	let rowIndex = 0;
	let memberIndex = 0;

	const pageList = {
		pages: [newPage()],
	};

	let memberIndexWhile = 0;
	while (members.length > memberIndexWhile) {
		if (rowIndex < rowsPerPage) {
			if (memberIndex < membersPerRow) {
				pageList.pages[pageIndex].rows[rowIndex].push(
					members[memberIndexWhile]
				);
				memberIndexWhile++;
				memberIndex++;
			} else {
				pageList.pages[pageIndex].rows.push(newRow());
				rowIndex++;
				memberIndex = 0;
			}
		} else {
			pageList.pages.push(newPage());
			rowIndex = 0;
			pageIndex++;
		}
	}
	return pageList;
}

function buildMemberGrop(_divideMembers, classes) {
	return _divideMembers.map((memberRow, key) => {
		return (
			<Grid
				item
				container
				direction="row"
				justify="center"
				alignItems="stretch"
				key={key}
			>
				{memberRow.map((member, key) => {
					return (
						<Grid item key={key} className={classes.card}>
							<Card
								name={member.name}
								office={member.office}
								urlPhoto={member.photo}
							/>
						</Grid>
					);
				})}
			</Grid>
		);
	});
}

export default function Team() {
	const classes = useStyles();
	const theme = useTheme();

	const members1 = membersRepository(); // provisorio,
	const members = [...members1, ...members1]; // apenas para testar mais de 8 membros

	const [pageIndex, setPageIndex] = useState(0);

	const isScreenSizeUpSM = useMediaQuery(theme.breakpoints.up("sm"));
	const isScreenSizeUpMD = useMediaQuery(theme.breakpoints.up("md"));

	let rowsPerPage = 2;
	let membersPerRow;
	if (isScreenSizeUpSM && isScreenSizeUpMD) {
		membersPerRow = 4;
	}
	if (isScreenSizeUpSM && !isScreenSizeUpMD) {
		membersPerRow = 2;
	}
	if (!isScreenSizeUpSM && !isScreenSizeUpMD) {
		membersPerRow = 1;
	}

	const pageList = configArrayMembers(members, membersPerRow, rowsPerPage);
	const buildPages = pageList.pages.map((page) => {
		return buildMemberGrop(page.rows, classes);
	});

	return (
		<Grid
			className={classes.boxTeam}
			container
			direction="column"
			justify="center"
			alignItems="center"
		>
			<Grid item>
				<Typography
					componet="p"
					className={classes.title}
				>{`Equipe`}</Typography>
			</Grid>

			<Grid item>
				<Typography componet="p" className={classes.subtitle}>
					Conheça um pouco mais sobre o nosso time!
				</Typography>
			</Grid>

			<Grid
				item
				className={classes.team}
				container
				direction="column"
				justify="center"
				alignItems="center"
			>
				{/* <img
          className={classes.backgroundLines}
          src={BackgroundImage}
          alt="Style Lines"
        /> */}
				<AutoPlaySwipeableViews
					animateHeight={true}
					index={pageIndex}
					onChangeIndex={(newIndex) => setPageIndex(newIndex)}
					enableMouseEvents={true}
					className={classes.autoPlay}
					interval={isScreenSizeUpMD ? 3000 : 2000}
				>
					{buildPages.map((grop, index) => (
						<div key={index}>{grop}</div>
					))}
				</AutoPlaySwipeableViews>
			</Grid>
		</Grid>
	);
}

/**
 * Estrutura:
 *
 * [page, page, ...]
 * page -> [[row],[row]]
 * row -> [cards, card, ...]
 * [[[[cards, card, ...]], [[cards, card, ...]]], [[[cards, card, ...]], [[cards, card, ...]]], ... ]
 */
