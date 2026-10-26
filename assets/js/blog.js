// ======================================================
// BLOG DATA
// ======================================================

const blogData = [
  {
    id: 1,
    title: "Choosing PCB Drill Bits",
    category: "Drilling",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_drill_bits.png",
    excerpt: "Selecting the correct drill bit improves precision and tool life across all board types.",
    content: "Selecting the correct PCB drill bit is one of the most important decisions in the drilling process because it directly impacts hole quality, production efficiency, and tool life. PCB drilling requires extremely high precision, often involving thousands of holes on a single panel. Using the wrong drill bit can result in inaccurate hole diameters, rough edges, excessive burr formation, and increased scrap rates.<br>Carbide drill bits are the industry standard for PCB manufacturing due to their hardness, wear resistance, and ability to maintain dimensional accuracy at very high spindle speeds. For standard FR4 materials, carbide drills operating between 80,000 and 200,000 RPM provide the best combination of performance and durability. High-density interconnect (HDI) boards often require micro-drills with diameters below 0.20 mm, demanding even tighter manufacturing tolerances.<br>Bit geometry plays a significant role in drilling quality. Point angle, flute design, and cutting edge geometry determine chip evacuation efficiency and heat generation. Poor chip removal can lead to hole wall damage and premature tool failure. Manufacturers should regularly monitor drill wear and replace tools before hole quality begins to deteriorate.<br>Proper storage and handling are equally important. Carbide tools are brittle and can easily chip if mishandled. Automated tool management systems help track drill usage and ensure consistent performance throughout production runs. By selecting the correct drill bit specifications and maintaining proper operating conditions, manufacturers can achieve higher yields, improved reliability, and reduced production costs."
  },
  {
    id: 2,
    title: "High-Speed Spindles",
    category: "Spindles",
    readTime: "5 min read",
    image: "./assets/Images/blog/pcb_spindles.png",
    excerpt: "High RPM spindles improve drilling performance and consistency in multilayer production.",
    content: "High RPM spindles dramatically improve drilling performance across multilayer boards. Thermal stability and vibration dampening are critical factors when operating above 150,000 RPM. Air-bearing spindles offer the lowest runout for fine-pitch applications and should be paired with auto-balancing collets for extended tool life. High-speed spindles are the heart of modern PCB drilling machines, enabling manufacturers to produce precise holes at extremely high production rates. As PCB designs become more complex and feature smaller hole diameters, spindle performance becomes increasingly critical. Modern PCB drilling spindles commonly operate between 80,000 and 250,000 RPM depending on the application and material requirements.<br>The primary advantage of high-speed spindles is improved cutting efficiency. Higher rotational speeds reduce cutting forces, improve hole roundness, and minimize mechanical stress on delicate board structures. This is especially important when drilling multilayer boards containing thin copper layers and fragile dielectric materials.<br>Runout is one of the most important performance characteristics of a spindle. Excessive runout can cause oversized holes, poor registration, and accelerated drill wear. Air-bearing spindles offer exceptional precision by eliminating mechanical contact between rotating components, resulting in significantly lower vibration levels and superior accuracy.<br>Thermal stability is another key factor. Continuous operation at high RPM generates heat that can affect spindle alignment and bearing performance. Advanced cooling systems and precision-balanced rotating assemblies help maintain consistent operating conditions throughout long production shifts.<br>Maintenance practices greatly influence spindle lifespan. Regular inspection of bearings, collets, air supply systems, and vibration levels can prevent unexpected failures. Predictive maintenance systems using vibration analysis and real-time monitoring are becoming increasingly common in advanced PCB manufacturing facilities.<br>By investing in high-quality spindle technology and implementing proper maintenance procedures, manufacturers can increase productivity, reduce downtime, and achieve the precision required for modern electronic products."
  },
  {
    id: 3,
    title: "Routing Tools for PCB Edges",
    category: "Routing",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_routing_tools.png",
    excerpt: "Routing tools define PCB edge quality and directly affect dimensional accuracy.",
    content: "Routing tools define PCB edge quality and directly affect dimensional accuracy. Tool geometry, chip load, and feed rate must be tuned to the board material for optimal results. Undersized tools leave burrs; oversized tools create mechanical stress in the laminate. Compression routers work best on double-sided copper boards.<br>Routing is a critical finishing process in PCB manufacturing that determines the final shape and edge quality of the board. High-quality routing tools ensure clean edges, accurate dimensions, and minimal mechanical stress on the laminate structure. Poor routing practices can result in burrs, delamination, fiber pull-out, and dimensional inaccuracies that affect assembly performance.<br>Tool geometry significantly influences routing performance. Factors such as flute count, cutting edge angle, and tool diameter must be carefully selected based on board material and production requirements. Compression routers are commonly used because they reduce burr formation on both top and bottom surfaces, particularly in double-sided copper-clad laminates.<br>Feed rate and spindle speed must be optimized together. Excessively high feed rates can increase tool loading and edge defects, while overly conservative settings reduce productivity and increase manufacturing costs. Proper chip evacuation is also essential to prevent heat buildup and maintain consistent cutting performance.<br>Tool wear monitoring is crucial in high-volume production environments. Worn routing tools can gradually degrade edge quality before operators notice visible defects. Automated vision systems and predictive maintenance software help identify wear patterns and schedule tool replacement before quality issues occur.<br>Dust extraction systems play an important role in routing operations. Fiberglass particles generated during cutting can contaminate equipment and pose health risks if not properly removed. Modern routing machines incorporate high-efficiency extraction systems to maintain a clean production environment.<br>When routing parameters are carefully optimized and tool condition is closely monitored, manufacturers can achieve superior edge quality, consistent dimensional accuracy, and longer tool life across a wide range of PCB designs."
  },
  {
    id: 4,
    title: "V-Cut Scoring Techniques",
    category: "V-Cut",
    readTime: "3 min read",
    image: "./assets/Images/blog/vcut_scoring.png",
    excerpt: "V-cut allows clean PCB panel separation with minimal stress on edge components.",
    content: "V-cut scoring allows clean PCB panel separation without mechanical stress on components near board edges. Scoring depth and angle tolerances are critical to consistent breakout force. Standard V-cut depth is typically one-third of total board thickness, with a 30° or 45° blade angle depending on material stack-up.<br>V-cut scoring is a popular PCB depanelization technique used to separate individual boards from a larger manufacturing panel. The process involves cutting V-shaped grooves into both sides of the panel while leaving a thin section of material intact. This allows boards to be separated easily after assembly while maintaining panel rigidity during production.<br>One of the primary advantages of V-cut technology is its efficiency. Unlike routing, V-cut scoring removes very little material and can be performed quickly across long panel lengths. This makes it particularly suitable for high-volume manufacturing environments where throughput is a major concern.<br>Scoring depth is a critical parameter. If the groove is too shallow, excessive force may be required during separation, increasing the risk of board damage. If the groove is too deep, panels may become fragile during handling and transportation. Most manufacturers target a residual material thickness of approximately one-third of the total board thickness.<br>Blade angle selection also affects separation quality. Common angles include 30° and 45°, with the choice depending on board thickness and material characteristics. Precision alignment between top and bottom scoring blades is essential to maintain consistent breakout force across the panel.<br>Engineers must consider component placement during design. Components positioned too close to the V-cut line may experience mechanical stress during depanelization. Adequate clearance helps protect solder joints and sensitive electronic components.<br>Properly implemented V-cut scoring provides a reliable, cost-effective solution for PCB separation while maintaining manufacturing efficiency and product quality."
  },
  {
    id: 5,
    title: "Drill Stack-Up Strategies",
    category: "Drilling",
    readTime: "6 min read",
    image: "./assets/Images/blog/multilayer_pcb_drilling.png",
    excerpt: "Stack-up improves multilayer drilling yield and significantly reduces bit wear.",
    content: "Stack-up strategy improves multilayer drilling yield and reduces drill bit wear. Selecting the right backup and entry materials is as important as the drill geometry itself. Aluminium entry sheets prevent burring on copper foil surfaces, while phenolic backup boards support clean exit hole quality on the bottom layer.<br>Drill stack-up strategy is a fundamental aspect of efficient PCB manufacturing, particularly when processing multilayer boards in high-volume production environments. A properly designed stack-up arrangement improves drilling productivity, reduces tool wear, enhances hole quality, and minimizes manufacturing defects.<br>A typical drilling stack consists of an entry material, one or more PCB panels, and a backup material. Each layer serves a specific purpose during the drilling process. Entry materials, commonly made from aluminum, help stabilize the drill bit as it enters the stack. This reduces burr formation on the copper surface and improves hole positioning accuracy. Backup materials support the drill as it exits the panel, minimizing breakout defects and maintaining clean hole edges.<br>Stack height selection requires careful consideration. Excessive stack heights can increase drill deflection, reduce positional accuracy, and accelerate tool wear. Conversely, very small stacks may limit production efficiency. Manufacturers must balance productivity requirements with quality objectives when determining optimal stack configurations.<br>Material properties also influence stack-up design. Different laminate thicknesses, copper weights, and board constructions respond differently to drilling forces. High-density interconnect boards often require specialized stack arrangements to maintain precise hole quality and registration accuracy.<br>Heat generation is another important factor. Drilling thousands of holes at high speeds produces significant frictional heat. Proper stack materials help dissipate heat and prevent damage to both the drill bit and board materials. Effective chip evacuation further reduces thermal stress and improves overall drilling performance.<br>Modern PCB facilities increasingly use simulation software and process monitoring systems to optimize stack-up configurations. These tools analyze drilling parameters, predict tool wear patterns, and identify opportunities for process improvement. Combined with automated tool management systems, they help manufacturers achieve consistent quality across large production volumes.<br>By carefully selecting entry materials, backup boards, stack heights, and drilling parameters, manufacturers can maximize productivity while maintaining the precision and reliability required for advanced electronic products."
  },
  {
    id: 6,
    title: "PCB Automation Trends",
    category: "Routing",
    readTime: "5 min read",
    image: "./assets/Images/blog/pcb_automation.png",
    excerpt: "Automation boosts throughput and reduces operator error in high-volume PCB fabrication.",
    content: "Automation boosts production throughput and reduces operator error in high-volume PCB fabrication. Vision systems and real-time adaptive feeds are now standard in modern CNC routing lines. Inline AOI integration cuts defect escape rates by up to 40%, and closed-loop spindle control maintains consistent chip load across full production shifts.<br>Automation is transforming PCB manufacturing by increasing production efficiency, improving quality control, and reducing dependence on manual operations. As electronic devices become more sophisticated and production volumes continue to grow, manufacturers are adopting advanced automation technologies to remain competitive in a rapidly evolving industry.<br>Modern PCB production facilities utilize automated material handling systems to transport panels between process stations. These systems reduce handling errors, improve workflow efficiency, and minimize the risk of physical damage to sensitive boards. Automated loading and unloading solutions also allow machines to operate continuously with minimal operator intervention.<br>Machine vision technology has become a cornerstone of PCB automation. High-resolution cameras combined with artificial intelligence algorithms can detect alignment issues, tool wear, routing defects, and surface abnormalities in real time. Automated optical inspection systems significantly improve defect detection rates while reducing the workload on quality control personnel.<br>Adaptive machining technologies represent another major advancement. Modern CNC drilling and routing machines continuously monitor spindle load, vibration levels, and cutting conditions. Based on real-time feedback, control systems automatically adjust feed rates and spindle speeds to optimize performance and maintain consistent quality.<br>Data analytics and Industry 4.0 integration are enabling smarter manufacturing environments. Production equipment can now communicate with centralized monitoring platforms that collect performance metrics, maintenance data, and quality statistics. This information supports predictive maintenance programs, helping manufacturers reduce unexpected downtime and extend equipment life.<br>Collaborative robotics are also becoming more common in PCB factories. These systems assist operators with repetitive tasks such as panel handling, packaging, and inspection processes. By automating routine operations, manufacturers can focus skilled personnel on process optimization and quality improvement activities.<br>As automation technologies continue to evolve, PCB manufacturers will benefit from greater efficiency, improved consistency, lower operating costs, and enhanced product quality. Facilities that embrace digital transformation will be better positioned to meet the demands of future electronic manufacturing challenges."
  },
  {
    id: 7,
    title: "When a Drill Should Be Changed",
    category: "Drilling",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_drill_bits.png",
    excerpt: "Hole wall roughness and a rising burr are the usual signs that a carbide drill has finished its run.",
    content: "A carbide drill rarely fails all at once. Hole quality slips first. The entry burr grows, the wall looks torn instead of clean, and the measured diameter starts to wander from the programmed size. Those are the signs to change the bit, before the panel is scrapped.<br>Hit count is a useful limit, but it is not the same for every board. A plain FR4 stack is kinder to the cutting edge than a thick copper build or a ceramic-filled laminate. If the same bit is asked to do both, the harder job should set the replacement point.<br>Heat is the other limit. A dull edge rubs instead of cuts, the flute packs with dust, and the next holes smear. Clearing the flute and checking the point under a glass takes less time than reworking a bad panel.<br>Store used and new bits apart. A chipped margin on a carbide drill will not heal on the next hit, and it will mark every hole after it. Record the diameter, the board type, and the hit count when the bit comes off the machine so the next order matches the one that actually ran."
  },
  {
    id: 8,
    title: "Entry Sheets and Backup Boards",
    category: "Drilling",
    readTime: "4 min read",
    image: "./assets/Images/blog/multilayer_pcb_drilling.png",
    excerpt: "The sheet above the copper and the board under the stack decide burr and exit breakout.",
    content: "The drill does not meet the copper first. It meets the entry sheet. A thin aluminium entry gives the point a stable start, keeps the copper from lifting into a burr, and carries some of the heat away from the flute.<br>The backup board does the same job on the way out. It supports the last foil so the drill does not tear the exit. Phenolic backup is the usual choice. If the backup is already full of old holes under the new pattern, the exit has nothing to lean on and breakout shows up on the bottom layer.<br>Entry and backup are consumables. A sheet that has been drilled through on the same coordinates will not guide the next stack. Change them when the pattern repeats, not when the pile looks short.<br>Thickness matters with the drill diameter. A very thin entry can let a micro-drill wander before it reaches the copper. A very thick entry adds length to every hit and wears the margin for no gain in hole quality. Match the sheet to the smallest drill on the program, then keep that pair together on the next reorder."
  },
  {
    id: 9,
    title: "Collets, Runout, and Tool Grip",
    category: "Spindles",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_spindles.png",
    excerpt: "A dirty collet shows up as oversize holes long before the spindle itself is at fault.",
    content: "Runout is how far the drill tip orbits away from the true centre while it spins. A small amount is normal. More than the hole can tolerate, and every hit is oversize, oval, or off the pad.<br>The collet is the usual cause, not the spindle body. Dust packed in the slots, a scored bore, or a drill shank that was not pushed home will all throw the tip off centre. Clean the collet, seat the tool to the stop, and check the tip again before changing the spindle.<br>Collets wear in a size. A collet that has gripped thousands of 3.175 mm shanks will not hold a smaller shank with the same force. Keep collets with the diameter they were bought for, and replace one that no longer closes evenly.<br>Air-bearing spindles still depend on clean, dry air. Oil or water in the supply marks the bearing faces and the runout comes back even with a new collet. If the same spindle drifts after a fresh collet and a fresh drill, check the air before the rotating assembly."
  },
  {
    id: 10,
    title: "Router Coatings and Board Material",
    category: "Routing",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_routing_tools.png",
    excerpt: "An uncoated router on an aluminium board, or a coated one on plain FR4, both waste the edge.",
    content: "The router has to match the board, not just the outline. Plain carbide is the usual tool for FR4. It cuts the glass and resin cleanly when the chip load is right, and a coating on that job often adds cost without adding life.<br>Aluminium-core boards are different. The metal smears, loads the flute, and welds to an uncoated edge. An aluminium-coated or diamond-coated router keeps the flute clear and leaves an edge that does not need a second pass to clean.<br>Diamond coating earns its place on abrasive builds, where the glass or filler sands a bare carbide edge flat in a short run. On a soft board it can be the wrong surface: the edge is durable, but it is not always the sharpest start.<br>Write the board type on the tool order. A router that finished an FR4 job cleanly can load up on the next aluminium panel, and the edge defect looks like a machine problem when it is the coating."
  },
  {
    id: 11,
    title: "V-Cut or a Routed Slot",
    category: "V-Cut",
    readTime: "3 min read",
    image: "./assets/Images/blog/vcut_scoring.png",
    excerpt: "V-cut is fast on a straight break. A routed slot is the better choice when parts sit on the edge.",
    content: "Both methods separate a panel. They do not suit the same board.<br>V-cut scores a straight groove on both sides and leaves a web that the operator breaks after assembly. It is quick, it wastes little laminate, and it suits a row of identical boards with clear space along the break. Parts, connectors, and tall components need to stay back from that line, because the break bends the web.<br>A routed slot cuts the outline completely, or leaves a few tabs. It takes longer and it makes dust, but the edge is a finished profile and nearby parts see less bending. Use it when the outline is not a straight line, or when a component sits too close for a snap.<br>Some panels use both: V-cut on the long straight breaks, routing on the ends and around connectors. The blade angle and the router diameter then have to be chosen together, so the remaining web and the routed edge meet without a step."
  },
  {
    id: 12,
    title: "Burrs on the Copper Surface",
    category: "Drilling",
    readTime: "3 min read",
    image: "./assets/Images/blog/pcb_drill_bits.png",
    excerpt: "A burr at the hole mouth usually means the entry, the drill wear, or the feed, not the laminate brand.",
    content: "A burr is copper that has been pushed up around the hole instead of cut. It catches on the next process, it can bridge a fine gap, and it is a poor start for plating.<br>Check the entry sheet first. If the aluminium is missing, too thin, or already drilled through on those coordinates, the drill meets the foil unsupported and lifts it. A fresh entry of the thickness used for that drill diameter removes most entry burrs.<br>If the entry is sound and the burr is still there, the point is worn or the feed is high for the speed. A dull drill ploughs. Reducing the feed, or changing the bit, brings the chip back to a cut. Raising the spindle speed without changing a dull tool only makes more heat.<br>Exit burrs are the backup board's job. Replace a backup that is perforated under the pattern. Chasing the burr with a heavier brush pass hides the cause and can scratch the foil the hole was meant to serve."
  },
  {
    id: 13,
    title: "Hole Depth and Drill Diameter",
    category: "Drilling",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_drill_bits.png",
    excerpt: "A small drill in a thick stack bends. The hole then misses the pad even when the program is right.",
    content: "Drill diameter and board thickness belong in the same sentence. A 0.3 mm bit through a thin double-sided board is a different job from the same bit through a tall multilayer stack.<br>As the hole gets deeper relative to the diameter, the drill bends. The entry can be on the pad while the exit has walked. That shows up as a breakout on an inner layer, not as a wrong coordinate in the file.<br>The practical limit is to shorten the stack, not to push the feed. Fewer panels in the pile, a fresh bit, and an entry sheet matched to that diameter keep the point straight. If the board itself is already thick, the drill has to be the one specified for that depth, with a flute long enough to clear the chip and a shank the collet can hold.<br>When you reorder, send the diameter and the stack height together. A bit that was fine on a 1.6 mm panel is the wrong assumption for an 8-layer build."
  },
  {
    id: 14,
    title: "Slot Drills and Oblong Holes",
    category: "Drilling",
    readTime: "3 min read",
    image: "./assets/Images/blog/multilayer_pcb_drilling.png",
    excerpt: "An oblong hole is a drill path, not a round bit left in one place.",
    content: "A round hole uses one drill and one hit. A slot uses a drill that moves, or a slot drill ground for that width. Treating them as the same tool leaves an hourglass shape or a slot that is tight at the ends and wide in the middle.<br>The slot width should be the drill diameter, and the length should be long enough for that drill to travel without dwelling. A dwell at the end rubs the wall and raises a burr. The program needs a lead-in the drill can follow, not a plunge in the centre of a finished slot if the bit is not made for it.<br>Slot drills wear on the sides as well as the point. A bit that still drills round holes cleanly can drag in a slot. Keep slot tools separate from the round-hole set, and replace them when the width, not just the surface finish, starts to move.<br>On the order, ask for the slot width and length, not only a diameter. A 1.0 mm round drill will not cut a 1.0 by 2.5 mm slot to size unless the path and the tool are both specified."
  },
  {
    id: 15,
    title: "What to Send with a Drill Order",
    category: "Drilling",
    readTime: "3 min read",
    image: "./assets/Images/blog/pcb_drill_bits.png",
    excerpt: "Diameter alone is not a drill specification. Flute length, shank, and board type decide the tool.",
    content: "A drill order that says only \"0.8 mm carbide\" can be filled in more than one way. The bit that arrives may drill the hole and still be wrong for the machine.<br>Send the diameter, the shank the collet holds, and the flute length the stack needs. A flute that is shorter than the stack packs dust and snaps. A shank that does not match the collet will not grip, no matter how correct the cutting diameter is.<br>Add the board. FR4, aluminium-core, and a heavy copper build do not share one geometry. If the last working bit had a coating, say so. The next lot should match that bit, not a catalogue default.<br>A used sample, or the code printed on the ring, is better than a description from memory. The ring diameter is not the cutting diameter. Read the cutting size, then the shank, and put both on the enquiry."
  },
  {
    id: 16,
    title: "Chip Load on a Routing Pass",
    category: "Routing",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_routing_tools.png",
    excerpt: "Too light a feed rubs the edge dull. Too heavy a feed tears the glass out of the wall.",
    content: "Chip load is the thickness of the bite each flute takes. It is set by the feed, the spindle speed, and the number of flutes. Get it wrong and the edge tells you before the dimension does.<br>A feed that is too low lets the router rub. The edge heats, the resin smears, and the tool looks worn after a short run. A feed that is too high loads the flute, lifts the glass, and leaves a fuzzy wall. The dimension may still pass while the edge is already scrap for the next assembly step.<br>Change one thing at a time. If the wall is smeared, raise the feed or drop the speed slightly, and check the flute is clear. If the wall is torn, ease the feed. A coated router on an aluminium board follows the same rule, with the extra demand that the flute must not weld up.<br>Write the speed and feed that produced a clean edge next to the tool size. The next shift should start from that pair, not from a guess."
  },
  {
    id: 17,
    title: "Breakaway Tabs on a Routed Panel",
    category: "Routing",
    readTime: "3 min read",
    image: "./assets/Images/blog/pcb_automation.png",
    excerpt: "Tabs hold the board in the panel. Too few, and it moves. Too many, and the break damages the edge.",
    content: "A routed panel stays in one piece because small tabs are left in the slot. After assembly those tabs are broken or cut. Their size and number are part of the routing job, not an afterthought.<br>Too few tabs, or tabs that are too thin, let the board vibrate while the router is still cutting. The wall chatters and the outline moves. Too many tabs, or a thick one on a narrow board, make the later break tear copper and crack the solder mask at the edge.<br>Place tabs away from connectors and from fine tracks that run out to the profile. A tab under a gold finger or beside a component pad is where the break does the damage. Three small tabs on a modest board are often enough. A long board needs them spaced so the middle cannot flutter.<br>If the tab is mouse-bitten, the holes that form it need the same drill discipline as any other hole: entry, backup, and a bit that still cuts. A torn tab hole becomes a notch in the finished edge."
  },
  {
    id: 18,
    title: "Routing an Internal Window",
    category: "Routing",
    readTime: "3 min read",
    image: "./assets/Images/blog/pcb_routing_tools.png",
    excerpt: "An internal cutout needs a start hole the router can enter without scarring the wall.",
    content: "The outer profile can be approached from the scrap. An internal window cannot. The router has to enter through a hole, then follow the outline without leaving a witness where it joined.<br>Drill the start hole inside the scrap of the window, not on the finished wall. The router then leads in on a curve. A straight plunge on the final edge leaves a nick that no second pass fully hides.<br>The router diameter has to fit the smallest inside corner. A 2 mm tool will not make a sharp internal corner, and stretching the program to force it only rubs. If the drawing shows a square corner, either the corner is a drill or the tool is smaller than the corner radius.<br>Internal cuts make a plug of waste. If that plug is not held or extracted, it can lift into the flute and break the tool. Plan the last side of the window so the plug is still attached until the router is clear, or so extraction takes it as it comes free."
  },
  {
    id: 19,
    title: "Matching Spindle Speed to the Drill",
    category: "Spindles",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_spindles.png",
    excerpt: "A small drill wants a higher speed than a large one. One RPM for the whole magazine wears both.",
    content: "Cutting speed lives at the rim of the drill, not on the spindle display. The same RPM is a gentle cut on a 0.3 mm bit and a harsh one on a 3 mm bit, because the rim of the larger tool is moving much faster.<br>Small drills need the higher speeds to cut instead of rub, within what the spindle and the bit are built for. Large drills need a lower speed so the rim does not burn the resin and load the flute. A single speed for every tool in the magazine is why one diameter lasts and the next does not.<br>The feed has to move with the speed. Raising RPM and leaving the feed unchanged makes a thinner chip and more rubbing. Dropping RPM without easing the feed overloads the edge.<br>Group the program by diameter when the machine allows it. The spindle then changes speed with the tool, and the wear looks the same from the smallest bit to the largest."
  },
  {
    id: 20,
    title: "A Short Check Before the Shift",
    category: "Spindles",
    readTime: "3 min read",
    image: "./assets/Images/blog/pcb_spindles.png",
    excerpt: "Warm the spindle, listen once, and confirm the air before the first panel of the day.",
    content: "A spindle that starts cold and goes straight to production speed spends its first minutes out of shape. A short warm-up at a moderate speed lets the bearing settle. The first panel is then drilled at the same condition as the last one of yesterday.<br>Listen during that warm-up. A new grind, a whistle, or a knock that was not there yesterday is a reason to stop, not a reason to start the stack. Catching it then saves the drill and the board.<br>On an air-bearing spindle, confirm the air is up to pressure and dry before the tool is loaded. Running without air, even briefly, marks the bearing. The runout that follows looks like a bad collet and is not fixed by changing the drill.<br>The same two minutes cover the collet: clean, correct size, tool seated. Most of the morning's scrap starts in that sequence, not in the program."
  },
  {
    id: 21,
    title: "Spares Worth Keeping on the Shelf",
    category: "Spindles",
    readTime: "3 min read",
    image: "./assets/Images/blog/pcb_spindles.png",
    excerpt: "A spare collet and the bearings the spindle actually uses will restart a line faster than a full spindle swap.",
    content: "When a spindle stops, the line does not need a catalogue. It needs the part that failed, in the size that machine uses.<br>Collets are the first spare. Keep at least one of each shank the magazine holds, still in the sleeve, not loose in a drawer where the bore gets nicked. A scored spare is not a spare.<br>Bearings and the small hardware around them are the second. Air-bearing machines and ball-bearing machines do not share those parts. The number on the spindle housing, not a similar-looking unit from another brand, is what the order should quote.<br>A collet remover and a clean cloth belong with the spares. Forcing a collet out with the wrong tool ovalises it, and the new drill then runs out in a collet you just replaced.<br>List the spindle model once and keep that list with the reorder. Guessing the bearing from a photograph costs a day. The model number costs a line on the first enquiry."
  },
  {
    id: 22,
    title: "Choosing the V-Cut Blade",
    category: "V-Cut",
    readTime: "3 min read",
    image: "./assets/Images/blog/vcut_scoring.png",
    excerpt: "Blade diameter, angle, and tooth count have to match the scorer, not just the board thickness.",
    content: "A V-cut blade is not chosen by diameter alone. The machine accepts a certain bore and a certain outside diameter. A blade that is the right angle and the wrong bore does not go on the arbor.<br>The angle, often 30° or 45°, sets the width of the groove at the surface. A steeper angle leaves a narrower groove and a different feel when the board is broken. Changing the angle without changing the score depth changes the web that is left, so the two settings move together.<br>Tooth count changes the cut. More teeth can leave a smoother groove and a lighter load on each tooth. Fewer teeth take a heavier chip and can tear a thin board if the feed is not eased. Match the tooth count to the board you actually score, and keep upper and lower blades as a pair.<br>On the order, send the outside diameter, the bore, the angle, and the tooth count. A photo of the old blade helps, but the numbers stamped on it are what the next blade has to match."
  },
  {
    id: 23,
    title: "Keeping the Two Scores in Line",
    category: "V-Cut",
    readTime: "3 min read",
    image: "./assets/Images/blog/vcut_scoring.png",
    excerpt: "If the top groove and the bottom groove do not meet, the board breaks off the line.",
    content: "V-cut is two grooves, one from each side, meant to meet on the same line. When they do not, the web is offset. The board still breaks, but it breaks to one side, and the edge is a step instead of a point.<br>Alignment is mechanical. Worn guides, a blade that is not square on the arbor, or a panel that is not seated against the same stops on both passes will shift one score. Check a coupon: the two grooves should face each other, and the remaining web should sit in the middle of the thickness.<br>Depth has to match on both sides as well. A deep top score and a shallow bottom score leave the web low in the board, and the break peels the bottom foil. Set both heads, then confirm on the coupon before the panel run.<br>If the break line wanders along the panel, do not deepen the score to force it. Find which pass has moved. A deeper groove on a misaligned pair only makes a thinner, still crooked web."
  },
  {
    id: 24,
    title: "Handling a Scored Panel",
    category: "V-Cut",
    readTime: "3 min read",
    image: "./assets/Images/blog/vcut_scoring.png",
    excerpt: "The web has to survive the line and still break cleanly at the bench.",
    content: "A scored panel has two jobs. It must stay in one piece through printing, assembly, and handling. It must then separate without cracking parts or tearing the edge.<br>Those jobs pull in opposite directions. A thick web travels well and breaks badly. A thin web breaks cleanly and splits in the rack if the panel is flexed. The score depth is the compromise, set for the board thickness and for how far the panel has to travel before it is separated.<br>Do not bend a scored panel to test it over a component. Flex it on a bare coupon, in the direction of the groove. If the coupon snaps with a light, even force and a clean point, the panels from that setup can be handled flat and separated the same way.<br>Store scored panels flat. A stack that sags in the middle is already breaking the web on the boards at the bottom, and those cracks show up later as opens beside the groove."
  }
];

// =====================================
// DOM — wait for full page load
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  const blogGrid      = document.getElementById("blogGrid");
  const searchInput   = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");

  const modal        = document.getElementById("blogModal");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose   = document.getElementById("modalClose");
  const modalImage   = document.getElementById("modalImage");
  const modalTitle   = document.getElementById("modalTitle");
  const modalCategory= document.getElementById("modalCategory");
  const modalReadTime= document.getElementById("modalReadTime");
  const modalText    = document.getElementById("modalText");
  const resultCount  = document.getElementById("resultCount");
  const emptyState   = document.getElementById("emptyState");

  let activeFilter = "All";

  // =====================================
  // OPEN / CLOSE MODAL
  // =====================================

  function articleIdFromHash() {
    const id = Number(location.hash.replace(/^#/, ""));
    return Number.isInteger(id) && id > 0 ? id : 0;
  }

  function openModal(blog) {
    if (!modal) { console.error("blogModal element not found!"); return; }

    modalTitle.textContent     = blog.title;
    modalCategory.textContent  = blog.category;
    modalReadTime.textContent  = blog.readTime;
    modalImage.src             = blog.image;
    modalImage.alt             = blog.title;

    modalText.innerHTML = blog.content
      .split("<br>")
      .map(p => `<p style="margin-bottom:1rem">${p.trim()}</p>`)
      .join("");

    modal.style.cssText = "";
    modal.classList.remove("hidden");
    modal.classList.add("modal-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (typeof DialogFocus !== "undefined") DialogFocus.activate(modal);
  }

  function closeModal() {
    if (!modal || modal.classList.contains("hidden")) return;
    modal.classList.remove("modal-open");
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    modal.style.cssText = "";
    document.body.style.overflow = "";
    if (typeof DialogFocus !== "undefined") DialogFocus.deactivate();
    if (articleIdFromHash()) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  }

  function openArticleById(id) {
    const blog = blogData.find(item => item.id === id);
    if (!blog) return false;
    openModal(blog);
    return true;
  }

  // =====================================
  // RENDER BLOGS
  // =====================================

  function renderBlogs(data) {
    if (!blogGrid) return;
    blogGrid.innerHTML = "";

    if (resultCount) {
      resultCount.textContent = `${data.length} article${data.length !== 1 ? "s" : ""}`;
    }

    if (!data.length) {
      if (emptyState) emptyState.classList.remove("hidden");
      requestAnimationFrame(updateBlogNav);
      return;
    }
    if (emptyState) emptyState.classList.add("hidden");

    data.forEach(blog => {
      const card = document.createElement("article");
      card.className = "blog-card";

      card.innerHTML = `
        <img class="blog-card-img" src="${blog.image}" alt="${blog.title}" onerror="this.src='./assets/Images/pmt.jpg'">
        <div class="blog-card-body">
          <p class="blog-card-cat">${blog.category}</p>
          <h3 class="blog-card-title">${blog.title}</h3>
          <p class="blog-card-excerpt">${blog.excerpt}</p>
          <div class="blog-card-foot">
            <span class="blog-card-meta">${blog.readTime}</span>
            <button class="read-btn" type="button" data-id="${blog.id}">Read article</button>
          </div>
        </div>
      `;

      blogGrid.appendChild(card);
    });

    blogGrid.scrollLeft = 0;
    requestAnimationFrame(updateBlogNav);
  }

  const blogPrev = document.getElementById("blogPrev");
  const blogNext = document.getElementById("blogNext");

  function updateBlogNav() {
    if (!blogGrid || !blogPrev || !blogNext) return;
    const max = blogGrid.scrollWidth - blogGrid.clientWidth;
    const canScroll = max > 8;
    blogPrev.hidden = !canScroll;
    blogNext.hidden = !canScroll;
    blogPrev.disabled = blogGrid.scrollLeft <= 2;
    blogNext.disabled = blogGrid.scrollLeft >= max - 2;
  }

  function scrollBlogs(direction) {
    const card = blogGrid.querySelector(".blog-card");
    const step = card ? card.getBoundingClientRect().width + 12 : blogGrid.clientWidth;
    blogGrid.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  if (blogPrev) blogPrev.addEventListener("click", () => scrollBlogs(-1));
  if (blogNext) blogNext.addEventListener("click", () => scrollBlogs(1));
  if (blogGrid) blogGrid.addEventListener("scroll", updateBlogNav);
  window.addEventListener("resize", updateBlogNav);

  // =====================================
  // FILTER
  // =====================================

  function filterBlogs() {
    const term = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filtered = blogData.filter(blog => {
      const categoryMatch = activeFilter === "All" || blog.category === activeFilter;
        const searchMatch =
        blog.title.toLowerCase().includes(term) ||
        blog.excerpt.toLowerCase().includes(term) ||
        blog.category.toLowerCase().includes(term) ||
        (blog.content || "").replace(/<[^>]+>/g, " ").toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });

    renderBlogs(filtered);
  }

  // =====================================
  // FILTER BUTTONS
  // =====================================

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      filterBlogs();
    });
  });

  // =====================================
  // SEARCH
  // =====================================

  if (searchInput) {
    searchInput.addEventListener("input", filterBlogs);
  }

  // =====================================
  // READ ARTICLE — single delegated listener
  // =====================================

  document.addEventListener("click", (e) => {
    const button = e.target.closest(".read-btn");
    if (!button) return;

    const id   = Number(button.dataset.id);
    const blog = blogData.find(item => item.id === id);
    if (!blog) return;

    openModal(blog);
    const nextHash = `#${blog.id}`;
    if (location.hash !== nextHash) {
      history.replaceState(null, "", nextHash);
    }
  });

  // =====================================
  // MODAL CLOSE EVENTS
  // =====================================

  if (modalClose)   modalClose.addEventListener("click", closeModal);
  if (modalOverlay) modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // =====================================
  // INIT
  // =====================================

  renderBlogs(blogData);
  openArticleById(articleIdFromHash());

  window.addEventListener("hashchange", () => {
    const id = articleIdFromHash();
    if (!id) {
      closeModal();
      return;
    }
    openArticleById(id);
  });

}); // end DOMContentLoaded