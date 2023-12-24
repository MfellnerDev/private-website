/**
 * Controller for this app - Handles all requests
 *
 * @author HikariDev
 * @version 24.12.2023
 */

const axios = require('axios');

const DISCORD_USER_ID = process.env.DISCORD_USER_ID || "1085974538388508833";
const LANYARD_API_URL = process.env.LANYARD_API_URL || "https://api.lanyard.rest/v1";
const DISCORD_AVATAR_URL = process.env.DISCORD_AVATAR_URL ||"https://cdn.discordapp.com/avatars";

exports.index = async (req, res) => {
    try {
        const response = await axios.get(`${LANYARD_API_URL}/users/${DISCORD_USER_ID}`);
        const data = response.data.data;

        let isListeningToSpotify = false;
        let spotifySongName, spotifyArtistName, spotifyAlbumCover;
        let discordUsername, discordAvatar, discordStatus;

        if (data.listening_to_spotify) {
            isListeningToSpotify = true;
            spotifySongName = data.spotify.song;
            spotifyArtistName = data.spotify.artist;
            spotifyAlbumCover = data.spotify.album_art_url;
        }

        discordUsername = data.discord_user.username;
        discordAvatar = `${DISCORD_AVATAR_URL}/${DISCORD_USER_ID}/${data.discord_user.avatar}.webp?size=128`;
        discordStatus = data.discord_status;

        res.render("index", {
            title: "HikariDev.at",
            isListeningToSpotify,
            spotifySongName,
            spotifyArtistName,
            spotifyAlbumCover,
            discordUsername,
            discordAvatar,
            discordStatus,
        });
    } catch (error) {
        console.error("Error fetching data: ", error);
        res.status(500).send("Internal Server Error");
    }
};


exports.projects = async (req, res, next) => {
    // TODO: code logic
}

exports.contact = async (req, res, next) => {
    // TODO: code logic
}