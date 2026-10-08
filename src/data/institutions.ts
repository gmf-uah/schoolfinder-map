export type InstitutionType = "University" | "College" | "Community College" | "High School" | "Military Academy";

export interface Institution {
  id: string;
  name: string;
  short: string;
  type: InstitutionType;
  /** 1 = most prominent (visible zoomed out) … 4 = local (visible zoomed in) */
  tier: 1 | 2 | 3 | 4;
  address: string;
  lat: number;
  lng: number;
  domain: string;
  colors: [string, string];
  founded?: number | undefined;
  enrollment?: number | undefined;
}

const i = (
  id: string, name: string, short: string, type: InstitutionType, tier: 1 | 2 | 3 | 4,
  address: string, lat: number, lng: number, domain: string, colors: [string, string],
  founded?: number, enrollment?: number,
): Institution => ({ id, name, short, type, tier, address, lat, lng, domain, colors, founded, enrollment });

export const institutions: Institution[] = [
  // Tier 1 — nationally prominent
  i("harvard", "Harvard University", "H", "University", 1, "Massachusetts Hall, Cambridge, MA 02138", 42.3770, -71.1167, "harvard.edu", ["#A51C30", "#FFFFFF"], 1636, 25000),
  i("mit", "Massachusetts Institute of Technology", "MIT", "University", 1, "77 Massachusetts Ave, Cambridge, MA 02139", 42.3601, -71.0942, "mit.edu", ["#A31F34", "#8A8B8C"], 1861, 11900),
  i("stanford", "Stanford University", "S", "University", 1, "450 Jane Stanford Way, Stanford, CA 94305", 37.4275, -122.1697, "stanford.edu", ["#8C1515", "#FFFFFF"], 1885, 17500),
  i("yale", "Yale University", "Y", "University", 1, "New Haven, CT 06520", 41.3163, -72.9223, "yale.edu", ["#00356B", "#FFFFFF"], 1701, 14500),
  i("princeton", "Princeton University", "P", "University", 1, "Princeton, NJ 08544", 40.3431, -74.6551, "princeton.edu", ["#E77500", "#000000"], 1746, 8800),
  i("uchicago", "University of Chicago", "UC", "University", 1, "5801 S Ellis Ave, Chicago, IL 60637", 41.7886, -87.5987, "uchicago.edu", ["#800000", "#FFFFFF"], 1890, 18400),
  i("caltech", "California Institute of Technology", "CIT", "University", 1, "1200 E California Blvd, Pasadena, CA 91125", 34.1377, -118.1253, "caltech.edu", ["#FF6C0C", "#FFFFFF"], 1891, 2400),
  i("berkeley", "University of California, Berkeley", "Cal", "University", 1, "Berkeley, CA 94720", 37.8719, -122.2585, "berkeley.edu", ["#003262", "#FDB515"], 1868, 45000),
  i("columbia", "Columbia University", "CU", "University", 1, "116th St & Broadway, New York, NY 10027", 40.8075, -73.9626, "columbia.edu", ["#B9D9EB", "#1D4F91"], 1754, 36600),
  i("umich", "University of Michigan", "M", "University", 1, "500 S State St, Ann Arbor, MI 48109", 42.2780, -83.7382, "umich.edu", ["#00274C", "#FFCB05"], 1817, 51000),
  i("utaustin", "University of Texas at Austin", "UT", "University", 1, "110 Inner Campus Dr, Austin, TX 78712", 30.2849, -97.7341, "utexas.edu", ["#BF5700", "#FFFFFF"], 1883, 52000),
  i("uw", "University of Washington", "UW", "University", 1, "1410 NE Campus Pkwy, Seattle, WA 98195", 47.6553, -122.3035, "washington.edu", ["#4B2E83", "#B7A57A"], 1861, 60000),
  i("duke", "Duke University", "D", "University", 1, "Durham, NC 27708", 36.0014, -78.9382, "duke.edu", ["#003087", "#FFFFFF"], 1838, 17600),
  i("upenn", "University of Pennsylvania", "Penn", "University", 1, "Philadelphia, PA 19104", 39.9522, -75.1932, "upenn.edu", ["#011F5B", "#990000"], 1740, 28700),
  // Tier 2
  i("ucla", "University of California, Los Angeles", "UCLA", "University", 2, "405 Hilgard Ave, Los Angeles, CA 90095", 34.0689, -118.4452, "ucla.edu", ["#2774AE", "#FFD100"], 1919, 47000),
  i("usc", "University of Southern California", "SC", "University", 2, "Los Angeles, CA 90007", 34.0224, -118.2851, "usc.edu", ["#990000", "#FFCC00"], 1880, 49000),
  i("cornell", "Cornell University", "C", "University", 2, "Ithaca, NY 14850", 42.4534, -76.4735, "cornell.edu", ["#B31B1B", "#FFFFFF"], 1865, 25600),
  i("brown", "Brown University", "B", "University", 2, "Providence, RI 02912", 41.8268, -71.4025, "brown.edu", ["#4E3629", "#ED1C24"], 1764, 10700),
  i("dartmouth", "Dartmouth College", "D", "College", 2, "Hanover, NH 03755", 43.7044, -72.2887, "dartmouth.edu", ["#00693E", "#FFFFFF"], 1769, 6700),
  i("northwestern", "Northwestern University", "N", "University", 2, "633 Clark St, Evanston, IL 60208", 42.0565, -87.6753, "northwestern.edu", ["#4E2A84", "#FFFFFF"], 1851, 22800),
  i("jhu", "Johns Hopkins University", "JHU", "University", 2, "3400 N Charles St, Baltimore, MD 21218", 39.3299, -76.6205, "jhu.edu", ["#002D72", "#68ACE5"], 1876, 31000),
  i("georgetown", "Georgetown University", "G", "University", 2, "3700 O St NW, Washington, DC 20057", 38.9076, -77.0723, "georgetown.edu", ["#041E42", "#63666A"], 1789, 19800),
  i("vanderbilt", "Vanderbilt University", "V", "University", 2, "2201 West End Ave, Nashville, TN 37235", 36.1447, -86.8027, "vanderbilt.edu", ["#000000", "#CFAE70"], 1873, 13800),
  i("rice", "Rice University", "R", "University", 2, "6100 Main St, Houston, TX 77005", 29.7174, -95.4018, "rice.edu", ["#00205B", "#C1C6C8"], 1912, 8600),
  i("notredame", "University of Notre Dame", "ND", "University", 2, "Notre Dame, IN 46556", 41.7056, -86.2353, "nd.edu", ["#0C2340", "#C99700"], 1842, 13100),
  i("gatech", "Georgia Institute of Technology", "GT", "University", 2, "North Ave NW, Atlanta, GA 30332", 33.7756, -84.3963, "gatech.edu", ["#B3A369", "#003057"], 1885, 45000),
  i("uiuc", "University of Illinois Urbana-Champaign", "I", "University", 2, "Champaign, IL 61820", 40.1020, -88.2272, "illinois.edu", ["#E84A27", "#13294B"], 1867, 56000),
  i("wisc", "University of Wisconsin–Madison", "W", "University", 2, "Madison, WI 53706", 43.0766, -89.4125, "wisc.edu", ["#C5050C", "#FFFFFF"], 1848, 49000),
  i("unc", "University of North Carolina at Chapel Hill", "UNC", "University", 2, "Chapel Hill, NC 27599", 35.9049, -79.0469, "unc.edu", ["#7BAFD4", "#13294B"], 1789, 32000),
  i("uva", "University of Virginia", "UVA", "University", 2, "Charlottesville, VA 22904", 38.0336, -78.5080, "virginia.edu", ["#232D4B", "#E57200"], 1819, 26000),
  i("cmu", "Carnegie Mellon University", "CMU", "University", 2, "5000 Forbes Ave, Pittsburgh, PA 15213", 40.4433, -79.9436, "cmu.edu", ["#C41230", "#000000"], 1900, 15800),
  i("westpoint", "United States Military Academy", "USMA", "Military Academy", 2, "West Point, NY 10996", 41.3915, -73.9560, "westpoint.edu", ["#000000", "#D4BF91"], 1802, 4400),
  i("usna", "United States Naval Academy", "USNA", "Military Academy", 2, "121 Blake Rd, Annapolis, MD 21402", 38.9828, -76.4840, "usna.edu", ["#00205B", "#C5B783"], 1845, 4500),
  i("ufl", "University of Florida", "UF", "University", 2, "Gainesville, FL 32611", 29.6436, -82.3549, "ufl.edu", ["#0021A5", "#FA4616"], 1853, 55000),
  i("osu", "The Ohio State University", "OSU", "University", 2, "Columbus, OH 43210", 40.0067, -83.0305, "osu.edu", ["#BB0000", "#666666"], 1870, 61000),
  i("asu", "Arizona State University", "ASU", "University", 2, "Tempe, AZ 85281", 33.4242, -111.9281, "asu.edu", ["#8C1D40", "#FFC627"], 1885, 80000),
  i("cuboulder", "University of Colorado Boulder", "CU", "University", 2, "Boulder, CO 80309", 40.0076, -105.2659, "colorado.edu", ["#CFB87C", "#000000"], 1876, 37000),
  i("utah", "University of Utah", "U", "University", 2, "201 Presidents Cir, Salt Lake City, UT 84112", 40.7649, -111.8421, "utah.edu", ["#CC0000", "#FFFFFF"], 1850, 35000),
  i("uminn", "University of Minnesota", "UMN", "University", 2, "Minneapolis, MN 55455", 44.9740, -93.2277, "umn.edu", ["#7A0019", "#FFCC33"], 1851, 54000),
  i("tamu", "Texas A&M University", "A&M", "University", 2, "College Station, TX 77843", 30.6187, -96.3365, "tamu.edu", ["#500000", "#FFFFFF"], 1876, 74000),
  // Tier 3 — regional colleges
  i("williams", "Williams College", "W", "College", 3, "880 Main St, Williamstown, MA 01267", 42.7128, -73.2032, "williams.edu", ["#500082", "#FFBE0A"], 1793, 2100),
  i("amherst", "Amherst College", "A", "College", 3, "Amherst, MA 01002", 42.3709, -72.5170, "amherst.edu", ["#3F1F69", "#FFFFFF"], 1821, 1900),
  i("pomona", "Pomona College", "P", "College", 3, "333 N College Way, Claremont, CA 91711", 34.0977, -117.7131, "pomona.edu", ["#0057B8", "#F7A800"], 1887, 1800),
  i("swarthmore", "Swarthmore College", "S", "College", 3, "500 College Ave, Swarthmore, PA 19081", 39.9055, -75.3540, "swarthmore.edu", ["#862633", "#FFFFFF"], 1864, 1600),
  i("reed", "Reed College", "R", "College", 3, "3203 SE Woodstock Blvd, Portland, OR 97202", 45.4810, -122.6307, "reed.edu", ["#A70E16", "#FFFFFF"], 1908, 1500),
  i("carleton", "Carleton College", "C", "College", 3, "1 N College St, Northfield, MN 55057", 44.4613, -93.1543, "carleton.edu", ["#003069", "#FFD200"], 1866, 2000),
  i("davidson", "Davidson College", "D", "College", 3, "Davidson, NC 28035", 35.5009, -80.8458, "davidson.edu", ["#AC1A2F", "#000000"], 1837, 1900),
  i("spelman", "Spelman College", "SC", "College", 3, "350 Spelman Ln SW, Atlanta, GA 30314", 33.7454, -84.4112, "spelman.edu", ["#0077C8", "#FFFFFF"], 1881, 2400),
  i("howard", "Howard University", "HU", "University", 3, "2400 6th St NW, Washington, DC 20059", 38.9227, -77.0194, "howard.edu", ["#003A63", "#E51937"], 1867, 12000),
  i("tulane", "Tulane University", "T", "University", 3, "6823 St Charles Ave, New Orleans, LA 70118", 29.9400, -90.1204, "tulane.edu", ["#006747", "#418FDE"], 1834, 14000),
  i("uhawaii", "University of Hawaiʻi at Mānoa", "UH", "University", 3, "2500 Campus Rd, Honolulu, HI 96822", 21.2969, -157.8171, "hawaii.edu", ["#024731", "#FFFFFF"], 1907, 19000),
  i("uak", "University of Alaska Fairbanks", "UAF", "University", 3, "Fairbanks, AK 99775", 64.8584, -147.8197, "uaf.edu", ["#236192", "#FFCD00"], 1917, 7000),
  i("smcc", "Santa Monica College", "SMC", "Community College", 3, "1900 Pico Blvd, Santa Monica, CA 90405", 34.0168, -118.4709, "smc.edu", ["#0050A0", "#FFFFFF"], 1929, 30000),
  i("deanza", "De Anza College", "DA", "Community College", 3, "21250 Stevens Creek Blvd, Cupertino, CA 95014", 37.3196, -122.0451, "deanza.edu", ["#C8102E", "#FFFFFF"], 1967, 20000),
  i("mdc", "Miami Dade College", "MDC", "Community College", 3, "300 NE 2nd Ave, Miami, FL 33132", 25.7781, -80.1918, "mdc.edu", ["#005DAA", "#FFFFFF"], 1959, 50000),
  i("acc", "Austin Community College", "ACC", "Community College", 3, "5930 Middle Fiskville Rd, Austin, TX 78752", 30.3263, -97.7116, "austincc.edu", ["#00573F", "#FFFFFF"], 1973, 40000),
  // Tier 4 — high schools
  i("stuy", "Stuyvesant High School", "SHS", "High School", 4, "345 Chambers St, New York, NY 10282", 40.7178, -74.0139, "stuy.edu", ["#C8102E", "#00205B"], 1904, 3300),
  i("bxsci", "Bronx High School of Science", "BxS", "High School", 4, "75 W 205th St, Bronx, NY 10468", 40.8781, -73.8908, "bxscience.edu", ["#E31837", "#002D72"], 1938, 3000),
  i("tjhsst", "Thomas Jefferson High School for Science and Technology", "TJ", "High School", 4, "6560 Braddock Rd, Alexandria, VA 22312", 38.8185, -77.1686, "tjhsst.fcps.edu", ["#CC0000", "#002366"], 1985, 1900),
  i("blhs", "Boston Latin School", "BLS", "High School", 4, "78 Avenue Louis Pasteur, Boston, MA 02115", 42.3380, -71.1022, "bls.org", ["#7A0019", "#FFFFFF"], 1635, 2400),
  i("lowell", "Lowell High School", "LHS", "High School", 4, "1101 Eucalyptus Dr, San Francisco, CA 94132", 37.7307, -122.4834, "lowellhs.org", ["#C8102E", "#FFFFFF"], 1856, 2700),
  i("whitney", "Whitney M. Young Magnet High School", "WY", "High School", 4, "211 S Laflin St, Chicago, IL 60607", 41.8784, -87.6644, "wyoung.org", ["#5C2D91", "#FFFFFF"], 1975, 2200),
  i("phillips", "Phillips Exeter Academy", "PEA", "High School", 4, "20 Main St, Exeter, NH 03833", 42.9799, -70.9491, "exeter.edu", ["#9A1D2E", "#FFFFFF"], 1781, 1100),
  i("andover", "Phillips Academy Andover", "PA", "High School", 4, "180 Main St, Andover, MA 01810", 42.6469, -71.1310, "andover.edu", ["#002855", "#FFFFFF"], 1778, 1150),
  i("lasa", "Liberal Arts and Science Academy", "LASA", "High School", 4, "7309 Lazy Creek Dr, Austin, TX 78724", 30.3061, -97.6556, "lasahighschool.org", ["#00274C", "#FFFFFF"], 1985, 1300),
  i("harvardwestlake", "Harvard-Westlake School", "HW", "High School", 4, "3700 Coldwater Canyon Ave, Studio City, CA 91604", 34.1394, -118.4126, "hw.com", ["#8C1D40", "#000000"], 1989, 1600),
  i("garfield", "Garfield High School", "GHS", "High School", 4, "400 23rd Ave, Seattle, WA 98122", 47.6050, -122.3017, "garfieldhs.org", ["#4B2E83", "#FFD100"], 1920, 1700),
  i("ihs", "Ithaca High School", "IHS", "High School", 4, "1401 N Cayuga St, Ithaca, NY 14850", 42.4520, -76.5000, "ithacacityschools.org", ["#C8102E", "#000000"], 1875, 1400),
];
