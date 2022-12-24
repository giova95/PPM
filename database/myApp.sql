-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Dic 24, 2022 alle 16:58
-- Versione del server: 10.4.24-MariaDB
-- Versione PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myApp`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `picture`
--

CREATE TABLE `picture` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` char(255) NOT NULL,
  `description` text NOT NULL,
  `date` smallint(6) NOT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `src` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `picture`
--

INSERT INTO `picture` (`id`, `title`, `author`, `description`, `date`, `tags`, `src`) VALUES
(79, 'The Fog Warning', 'Winslow Homer', 'The painting depicts a lone fisherman in a dory who has caught several halibut but now sees fog blowing up, threatening to cut him off as he rows back to his ship. His face is turned in profile to the viewer as he looks over his shoulder at the clouds of fog in the background.He is in a race against the dense fog to return to the main ship with his day\'s work.  The Boston Fine Art Museum gives this description:  The Fog Warning is a painting with a narrative, though its tale is disturbing rather than charming. As indicated by the halibut in his dory, the fisherman in this picture has been successful. But the hardest task of the day, the return to the main ship, is still ahead of him. He turns to look at the horizon, measuring the distance to the mother ship, and to safety. The seas are choppy and the dory rocks high on the waves, making it clear that the journey home will require considerable physical effort. But more threatening is the approaching fog bank, whose streamers echo, even mock, the fisherman\'s profile.  The scene is psychologically tense; the risk of being lost at sea as a result of a sudden fog was all too real at the time, and the viewer does not know whether this man will reach his ship. The weight of the halibut in the stern of the boat is slowing him down, but if he decides to leave his catch behind he will not get paid for his work. The picture has been used in elementary-school education to teach about interpretation of art and fishermen\'s lives.', 1885, 'boat person', 'scripts/uploads/src-1663320004902.jpg'),
(80, 'Automat', 'Edward Hopper', 'The painting portrays a lone woman staring into a cup of coffee in an automat at night. The reflection of identical rows of light fixtures stretches out through the night-blackened window.  Hopper\'s wife, Jo, served as the model for the woman. However, Hopper altered her face to make her younger (Jo was 44 in 1927). He also altered her figure; Jo was a curvy, full-figured woman, while one critic has described the woman in the painting as \"\'boyish\' (that is, flat-chested)\".  As is often the case in Hopper\'s paintings, both the woman\'s circumstances and her mood are ambiguous. She is well-dressed and is wearing makeup, which could indicate either that she is on her way to or from work at a job where personal appearance is important, or that she is on her way to or from a social occasion.  She has removed only one glove, which may indicate either that she is distracted, that she is in a hurry and can stop only for a moment, or simply that she has just come in from outside, and has not yet warmed up. But the latter possibility seems unlikely, for there is a small empty plate on the table, in front of her cup and saucer, suggesting that she may have eaten a snack and been sitting at this spot for some time.  The time of year�late autumn or winter�is evident from the fact that the woman is warmly dressed. But the time of day is unclear, since days are short at this time of year. It is possible, for example, that it is just after sunset, and early enough in the evening that the automat could be the spot at which she has arranged to rendezvous with a friend. Or it could be late at night, after the woman has completed a shift at work. Or again, it could be early in the morning, before sunrise, as a shift is about to start.', 1927, 'person', 'scripts/uploads/src-1663320165430.jpg'),
(81, 'Bedroom in Arles', 'Vincent van Gogh', 'Van Gogh started the first version during mid October 1888 while staying in Arles, and explained his aims and means to his brother Theo:  \"This time it simply reproduces my bedroom; but colour must be abundant in this part, its simplification adding a rank of grandee to the style applied to the objects, getting to suggest a certain rest or dream. Well, I have thought that on watching the composition we stop thinking and imagining. I have painted the walls pale violet. The ground with checked material. The wooden bed and the chairs, yellow like fresh butter; the sheet and the pillows, lemon light green. The bedspread, scarlet coloured. The window, green. The washbasin, orangey; the tank, blue. The doors, lilac. And, that is all. There is not anything else in this room with closed shutters. The square pieces of furniture must express unswerving rest; also the portraits on the wall, the mirror, the bottle, and some costumes. The white colour has not been applied to the picture, so its frame will be white, aimed to get me even with the compulsory rest recommended for me. I have depicted no type of shade or shadow; I have only applied simple plain colours, like those in cr�pes.\" Van Gogh included sketches of the composition in this letter as well as in a letter to Gauguin, written slightly later.In the letter, van Gogh explained that the painting had come out of a sickness that left him bedridden for days.This version has on the wall to the right miniatures of van Gogh\'s portraits of his friends Eug�ne Boch and Paul-Eug�ne Milliet. The portrait of Eug�ne Boch is called The Poet and the portrait of Paul Eug�ne Milliet is called The Lover.  In April 1889, van Gogh sent the initial version to his brother regretting that it had been damaged by the flood of the Rh�ne while he was interned at the Old Hospital in Arles. Theo proposed to have it relined and sent back to him in order to copy it. This \"repetition\" in original scale (Van Gogh\'s term was \"r�petition\") was executed in September 1889. Both paintings were then sent back to Theo.  In summer, 1889, Van Gogh finally decided to redo some of his \"best\" compositions in a smaller size (the term he used was r�ductions) for his mother and his sister Wil, The Bedroom was among the subjects he chose.These r�ductions, finished late in September 1889, are not exact copies.  In The Bedroom, the miniature portrait to the left recalls van Gogh\'s Peasant of Zundert self-portrait. The one to the right cannot be linked convincingly to any existing painting by van Gogh.', 1888, 'chair chair', 'scripts/uploads/src-1663320353165.jpg'),
(82, 'The Long Leg', 'Edward Hopper', 'Edward Hopper\'s paintings are characterized by isolation, melancholy, and loneliness. The Long Leg depicts a sailboat near the Long Point Light at Provincetown, Massachusetts, at about 3 o\'clock in the afternoon. The boat sails against the wind in a zigzag series of short and long tacks, or legs. Although the painting portrays a scene of leisure, no people are visible on the boat or in the landscape. Hopper\'s precise observation of light and of the behavior of the boat link him to a tradition of American Realism, but the stark, reductive composition and mood of isolation reflect the abstract, impersonal spirit of Modernism.', 1930, 'surfboard', 'scripts/uploads/src-1663320823896.webp'),
(83, 'People in the Sun', 'Edward Hopper', 'In People in the Sun, five people sit on the terrace of a hotel gazing toward a line of distant mountains. Stark contrasts and cool light emphasize their static poses and deadpan expressions. The painting was initially inspired by sunbathers in Washington Square Park near the New York City apartment the artist shared with his wife, artist Josephine Nivison. The two toured the country together and spent most summers on Cape Cod. Hopper changed the locale here to a western setting, drawing on memories of tourist destinations he visited in the American West. The figures, crowded into the lower left quadrant, observe but remain apart from the natural setting. The abstracted environment veers between a real view and a movie set, as if Hopper were silently replaying a film about the discomfort of city dwellers confronting the vastness of the western landscape. In Edward Hopper\'s People in the Sun, five men and women sit on a terrace beneath a vast blue sky. Stark contrasts and cool light emphasize the eerie expressions, frozen poses, and formal attire of the visitors. Hopper distilled his memories of tourist destinations in the American West to create a scene that is strangely familiar but nowhere in particular. The precisely staggered deck chairs and bands of color indicating mountains, sky, and grass create an abstracted environment that veers between a real view and a stage set, as if Hopper were replaying a silent film of a family vacation. People in the Sun suggests a crowd of tourists who feel obliged to take in a famous scenic view, but do so with little pleasure. The canvas may reflect Hopper\'s discomfort in the West, where he found himself unable to paint with his usual enthusiasm when confronted by the harsh light and monumental landscapes.', 1960, 'person person chair person', 'scripts/uploads/src-1663320900823.jpg'),
(84, 'Olympia', 'Edouard Manet', 'What shocked contemporary audiences was not Olympia\'s nudity, nor the presence of her fully clothed maid, but her confrontational gaze and a number of details identifying her as a demi-mondaine or prostitute.These include the orchid in her hair, her bracelet, pearl earrings and the oriental shawl on which she lies, symbols of wealth and sensuality. The black ribbon around her neck, in stark contrast with her pale flesh, and her cast-off slipper underline the voluptuous atmosphere. \"Olympia\" was a name associated with prostitutes in 1860s Paris.  The painting is modelled after Titian\'s Venus of Urbino (c. 1534). Whereas the left hand of Titian\'s Venus is curled and appears to entice, Olympia\'s left hand appears to block, which has been interpreted as symbolic of her role as a prostitute, granting or restricting access to her body in return for payment. Manet replaced the little dog (symbol of fidelity) in Titian\'s painting with a black cat, a creature associated with nocturnal promiscuity. The aroused posture of the cat was provocative; in French, chatte (cat) is slang for female genitalia. Olympia disdainfully ignores the flowers presented to her by her servant, probably a gift from a client. Some have suggested that she is looking in the direction of the door, as her client barges in unannounced.  The painting deviates from the academic canon in its style, characterized by broad, quick brushstrokes, studio lighting that eliminates mid-tones, large color surfaces and shallow depth. Unlike the smooth idealized nude of Alexandre Cabanel\'s La naissance de V�nus, also painted in 1863, Olympia is a real woman whose nakedness is emphasized by the harsh lighting. The canvas alone is 51.4 � 74.8 inches, which is rather large for this genre-style painting. Most paintings that were this size depicted historical or mythological events, so the size of the work, among other factors, caused surprise. Finally, Olympia is fairly thin by the artistic standards of the time. Charles Baudelaire thought thinness was more indecent than fatness.  The model for Olympia, Victorine Meurent, would have been recognized by viewers of the painting because she was well known in Paris circles. She started modeling when she was sixteen years old and she also was an accomplished painter in her own right. Some of her paintings were exhibited in the Paris Salon. The familiarity with the identity of the model was a major reason this painting was considered shocking to viewers. A well known woman currently living in modern-day Paris could not simultaneously represent a historical or mythological woman.', 1863, 'person person', 'scripts/uploads/src-1663321109482.jpg'),
(85, 'The Singing Butler', 'Jack Vettriano', 'The Singing Butler is an oil-on-canvas painting made by Scottish artist Jack Vettriano in 1992. It sold at auction in 2004 for �744,800, which was the record at the time for any Scottish painting, and for any painting ever sold in Scotland. Reproductions of The Singing Butler make it the best-selling art print in the UK.  The focal subject of The Singing Butler is based on an image of actress Orla Brady posing in her own dress which was published in The Illustrator\'s Figure Reference Manual (1987) as part of a series of photographic figure studies.', 1992, 'person person person person umbrella umbrella', 'scripts/uploads/src-1663321193065.jpeg'),
(96, 'prova', 'autore prova', 'description prova', 2020, 'chair person', 'scripts/uploads/src-1671543931229.jpg'),
(99, 'afadfads', 'afgdaafsd', 'gshshgh', 1800, 'book', 'scripts/uploads/src-1671818074447.jpg');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `picture`
--
ALTER TABLE `picture`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `picture`
--
ALTER TABLE `picture`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
