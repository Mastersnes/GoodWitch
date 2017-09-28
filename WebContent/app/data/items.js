'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Items
		 */
		"serrure" : {
			regarder : function(tableau, dom) {
				tableau.showText(["serrure-regarder"]);
			},
			gouter : function(tableau, dom) {
				tableau.showText(["serrure-gouter"]);
			},
			ecouter : function(tableau, dom) {
				tableau.showText(["serrure-ecouter"]);
			},
			ouvrir : function(tableau, dom) {
				tableau.showText(["serrure-ouvrir"]);
			},
			utiliser : function(tableau, dom, item) {
				if (!item) tableau.showInventaire(this);
				else {
				    var inventaire = tableau.inventaireView;
					switch (item) {
					case "tournevis":
						tableau.showText(["serrure-utiliser-tournevis"]);
						break;
					case "tige":
						tableau.showText(["serrure-utiliser-tige"]);
						inventaire.removeItem("tige");
						tableau.modifyElement(dom, "serrure-tige");
						break;
					case "nori":
						tableau.showText(["serrure-utiliser-nori"]);
						break;
					default:
						tableau.showText(["utiliser-non-prevu"]);
						break;
					}
				}
			}
		},
		"serrure-tige" : {
			examiner : function(tableau, dom) {
				tableau.showText(["serrure-tige-examiner"]);
			},
			prendre : function(tableau, dom) {
				tableau.showText(["serrure-tige-prendre"]);
			},
			utiliser : function(tableau, dom, item) {
				if (!item) tableau.showInventaire(this);
				else {
					var inventaire = tableau.inventaireView;
				    switch (item) {
					case "tournevis":
						tableau.modifyElement(dom, "serrure-done");
						tableau.showText(["serrure-tige-utiliser-tournevis"], function() {
							if (inventaire.hasItem("nori")) {
							    tableau.go("piece-sombre");
							}else {
							    tableau.showText(["coffre-oublie-nori"]);
							}
						});
						break;
					case "nori":
						tableau.showText(["serrure-tige-utiliser-nori"]);
						break;
					default:
						tableau.showText(["utiliser-non-prevu"]);
						break;
					}
				}
			}
		},
		"serrure-done" : {
			ouvrir : function(tableau, dom) {
			    var inventaire = tableau.inventaireView;
			    if (inventaire.hasItem("nori")) {
                    tableau.go("piece-sombre");
                }else {
                    tableau.showText(["coffre-oublie-nori"]);
                }
			}
		},
		"tige" : {
			examiner : function(tableau, dom) {
				tableau.showText(["tige-examiner"]);
			},
			prendre : function(tableau, dom) {
				tableau.showText(["tige-prendre"]);
			},
			utiliser : function(tableau, dom, item) {
				if (!item) tableau.showInventaire(this);
				else {
					switch (item) {
					case "tournevis":
						tableau.showText(["tige-utiliser-tournevis"]);
						break;
					case "nori":
						tableau.showText(["tige-utiliser-nori"]);
						break;
					case "tige":
						tableau.showText(["tige-utiliser-tige"]);
						break;
					default:
						tableau.showText(["utiliser-non-prevu"]);
						break;
					}
				}
			}
		},
		"tige-abime" : {
			examiner : function(tableau, dom) {
				tableau.showText(["tige-abime-examiner"]);
			},
			prendre : function(tableau, dom) {
				tableau.showText(["tige-abime-prendre"]);
			},
			utiliser : function(tableau, dom, item) {
				if (!item) tableau.showInventaire(this);
				else {
				    var inventaire = tableau.inventaireView;
					switch (item) {
					case "tournevis":
						tableau.showText(["tige-abime-utiliser-tournevis"]);
						inventaire.addItem("tige");
						tableau.removeElement(dom);
						break;
					case "nori":
						tableau.showText(["tige-utiliser-nori"]);
						break;
					default:
						tableau.showText(["utiliser-non-prevu"]);
						break;
					}
				}
			}
		},
		"nori" : {
            regarder : function(tableau, dom) {
                tableau.showText(["nori-regarder"]);
            },
            prendre : function(tableau, dom) {
                var inventaire = tableau.inventaireView;
                if (inventaire.hasItem("tournevis")) {
                    tableau.showText(["nori-prendre"]);
                    inventaire.addItem("nori");
                    tableau.removeElement(dom);
                }else {
                    tableau.showText(["nori-prendre-no"]);
                }
            },
            examiner : function(tableau, dom) {
                var inventaire = tableau.inventaireView;
                if (inventaire.hasItem("tournevis")) {
                    tableau.showText(["nori-tournevis-prendre-no"]);
                }else {
                    tableau.showText(["nori-tournevis-prendre"]);
                    inventaire.addItem("tournevis");
                    tableau.saveGame();
                }
            },
            gouter : function(tableau, dom) {
                tableau.showText(["nori-gouter"]);
            },
            utiliser : function(tableau, dom, item) {
                if (!item) tableau.showInventaire(this);
                else {
                    switch (item) {
                    case "tige":
                        tableau.showText(["nori-utiliser-tige"]);
                        break;
                    case "tournevis":
                        tableau.showText(["nori-utiliser-tournevis"]);
                        break;
                    default:
                        tableau.showText(["utiliser-non-prevu"]);
                        break;
                    }
                }
            }
		},
        "boite" : {
            regarder : function(tableau, dom) {
                tableau.showText(["boite-regarder"]);
            },
            prendre : function(tableau, dom) {
                tableau.showText(["boite-prendre-no"]);
            },
            examiner : function(tableau, dom) {
                tableau.showText(["boite-examiner"]);
            }
        },
        "collier" : {
            regarder : function(tableau, dom) {
                tableau.showText(["collier-regarder"]);
            },
            gouter : function(tableau, dom) {
                tableau.showText(["collier-gouter"]);
            },
            casser : function(tableau, dom) {
                tableau.showText(["collier-casser"]);
            }
        },
        "athame" : {
            regarder : function(tableau, dom) {
                tableau.showText(["athame-regarder"]);
            },
            prendre : function(tableau, dom) {
                tableau.showText(["athame-prendre"]);
            }
        },
        "table" : {
            regarder : function(tableau, dom) {
                tableau.showText(["table-regarder"]);
            },
            examiner : function(tableau, dom) {
                tableau.showText(["table-examiner"]);
            },
            gouter : function(tableau, dom) {
                tableau.showText(["table-gouter"]);
            },
            cacher : function(tableau, dom) {
            	switch (tableau.lieu) {
	            	case "piece-sombre":
						tableau.showText(["table-cacher-no-sombre"]);
						break;
	            	case "piece":
						tableau.showText(["table-cacher"], function() {
							tableau.go("piece-ted", null, true);
						});
						break;
					case "piece-ted":
						tableau.showText(["table-cacher-no-ted"]);
						break;
					case "piece2":
						tableau.showText(["table-cacher-no-ted-assome"]);
						break;
					default:
						tableau.showText(["table-cacher-no-sombre"]);
						break;
				}
            }
        },
        "chemine" : {
            regarder : function(tableau, dom) {
                tableau.showText(["chemine-regarder"]);
            },
            ecouter : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                
                tableau.showText(["chemine-ecouter"]);
            },
            examiner : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["chemine-examiner"]);
            },
            gouter : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["chemine-gouter"]);
            }
        },
        "pot-charbon" : {
            regarder : function(tableau, dom) {
                tableau.showText(["pot-charbon-regarder"]);
            },
            ecouter : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["pot-charbon-ecouter"]);
            },
            examiner : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["pot-charbon-examiner"]);
            }
        },
        "casserole1" : {
            regarder : function(tableau, dom) {
                tableau.showText(["casserole-regarder"]);
            },
            gouter : function(tableau, dom) {
                tableau.showText(["casserole-gouter"]);
            },
            ecouter : function(tableau, dom) {
                tableau.showText(["casserole-ecouter"]);
            },
            prendre : function(tableau, dom) {
            	switch (tableau.lieu) {
	            	case "piece-sombre":
						tableau.showText(["no-sombre"]);
						break;
	            	case "piece":
						tableau.showText(["attention-ted-arrive"]);
						break;
					default:
						tableau.showText(["casserole-prendre-no"]);
						break;
				}
            }
        },
        "casserole2" : {
            regarder : function(tableau, dom) {
                tableau.showText(["casserole-regarder"]);
            },
            gouter : function(tableau, dom) {
                tableau.showText(["casserole-gouter"]);
            },
            ecouter : function(tableau, dom) {
                tableau.showText(["casserole-ecouter"]);
            },
            prendre : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece-sombre":
                        tableau.showText(["no-sombre"]);
                        break;
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        break;
                    default:
                        tableau.showText(["casserole-prendre-no"]);
                        break;
                }
            }
        },
        "casserole3" : {
            regarder : function(tableau, dom) {
                tableau.showText(["casserole-regarder"]);
            },
            gouter : function(tableau, dom) {
                tableau.showText(["casserole-gouter"]);
            },
            ecouter : function(tableau, dom) {
                tableau.showText(["casserole-ecouter"]);
            },
            prendre : function(tableau, dom) {
            	switch (tableau.lieu) {
	            	case "piece-sombre":
						tableau.showText(["no-sombre"]);
						break;
	            	case "piece":
						tableau.showText(["attention-ted-arrive"]);
						break;
					default:
						tableau.showText(["casserole-prendre-no"]);
						break;
				}
	        }
        },
        "casserole5" : {
            regarder : function(tableau, dom) {
                tableau.showText(["casserole-regarder"]);
            },
            gouter : function(tableau, dom) {
                tableau.showText(["casserole-gouter"]);
            },
            ecouter : function(tableau, dom) {
                tableau.showText(["casserole-ecouter"]);
            },
            prendre : function(tableau, dom) {
            	switch (tableau.lieu) {
	            	case "piece-sombre":
						tableau.showText(["no-sombre"]);
						break;
	            	case "piece":
						tableau.showText(["attention-ted-arrive"]);
						break;
					default:
						tableau.showText(["casserole-prendre-no"]);
						break;
				}
            }
        },
        /**
         * Bonne casserole
         */
        "casserole4" : {
            regarder : function(tableau, dom) {
                tableau.showText(["casserole-ok-regarder"]);
            },
            gouter : function(tableau, dom) {
                tableau.showText(["casserole-gouter"]);
            },
            ecouter : function(tableau, dom) {
                tableau.showText(["casserole-ok-ecouter"]);
            },
            prendre : function(tableau, dom) {
            	var inventaire = tableau.inventaireView;
            	switch (tableau.lieu) {
	            	case "piece-sombre":
						tableau.showText(["no-sombre"]);
						break;
	            	case "piece":
						tableau.showText(["attention-ted-arrive"]);
						break;
					case "piece-ted":
						tableau.showText(["casserole-ok-prendre"]);
		            	inventaire.addItem("casserole");
		            	tableau.removeElement(dom);
						break;
					default:
						tableau.showText(["casserole-prendre-no"]);
						break;
				}
            }
        },
        "tonneau" : {
            regarder : function(tableau, dom) {
                tableau.showText(["tonneau-regarder"]);
            },
            examiner : function(tableau, dom) {
            	switch (tableau.lieu) {
	            	case "piece-sombre":
						tableau.showText(["no-sombre"]);
						break;
	            	case "piece":
						tableau.showText(["attention-ted-arrive"]);
						break;
					case "piece-ted":
						tableau.showText(["no-ted"]);
						break;
					case "piece2":
						var inventaire = tableau.inventaireView;
		            	if (inventaire.hasItem("eventCordePris", true)) {
		            		tableau.showText(["tonneau-vide"]);
		            	}else {
		            		tableau.showText(["tonneau-examiner"]);
		            		inventaire.addItem("corde");
		            		inventaire.addItem("eventCordePris", true);
		            	}
						break;
					default:
						tableau.showText(["tonneau-vide"]);
						break;
				}
            },
            ecouter : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["tonneau-ecouter"]);
            }
        },
        "meuble" : {
            regarder : function(tableau, dom) {
                tableau.showText(["meuble-regarder"]);
            },
            examiner : function(tableau, dom) {
            	switch (tableau.lieu) {
	            	case "piece-sombre":
	            		var inventaire = tableau.inventaireView;
		            	if (inventaire.hasItem("eventDessinPris", true)) {
		            		tableau.showText(["meuble-examiner-vide"]);
		            	}else {
		            		tableau.showText(["meuble-examiner"]);
		            		inventaire.addItem("dessin");
		            		inventaire.addItem("eventDessinPris", true);
		            	}
						break;
	            	case "piece":
						tableau.showText(["attention-ted-arrive"]);
						break;
					case "piece-ted":
						tableau.showText(["no-ted"]);
						break;
					case "piece2":
						tableau.showText(["meuble-examiner-vide"]);
						break;
					default:
						tableau.showText(["meuble-examiner-vide"]);
						break;
				}
            },
            gouter : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["meuble-gouter"]);
            }
        },
        "tapis" : {
            regarder : function(tableau, dom) {
                tableau.showText(["tapis-regarder"]);
            },
            examiner : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["tapis-examiner"]);
            },
            gouter : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["tapis-gouter"]);
            },
            vide1 : {},
            vide2 : {},
            vide3 : {},
            vide4 : {},
            soulever : function(tableau, dom) {
            	switch (tableau.lieu) {
	            	case "piece-sombre":
						tableau.showText(["no-sombre"]);
						break;
	            	case "piece":
						tableau.showText(["attention-ted-arrive"]);
						break;
					case "piece-ted":
						tableau.showText(["no-ted"]);
						break;
					case "piece2":
						tableau.showText(["tapis-soulever"]);
		            	tableau.removeElement(dom);
						break;
					default:
						tableau.showText(["utiliser-non-prevu"]);
						break;
				}
            }
        },
        "planque-livre" : {
            regarder : function(tableau, dom) {
                tableau.showText(["planque-livre-regarder"]);
            },
            examiner : function(tableau, dom) {
                tableau.showText(["planque-livre-examiner"]);
            },
            ouvrir : function(tableau, dom) {
                tableau.showText(["planque-livre-ouvrir"]);
            },
            vide1 : function() {},
            vide2 : function() {},
            vide3 : function() {},
            ecouter : function(tableau, dom) {
                tableau.showText(["planque-livre-ecouter"]);
            },
            utiliser : function(tableau, dom, item) {
            	if (!item) tableau.showInventaire(this);
                else {
                	var inventaire = tableau.inventaireView;
                    switch (item) {
                    case "nori":
                        tableau.showText(["planque-livre-utiliser-nori"]);
                        break;
                    case "casserole":
                    	tableau.showText(["planque-livre-utiliser-casserole"]);
                    	break;
                    case "dessin":
                    	tableau.showText(["planque-livre-utiliser-dessin"]);
                    	break;
                    case "tournevis":
                    	tableau.showText(["planque-livre-utiliser-tournevis"]);
                    	break;
                    case "couteau":
                    	tableau.showText(["planque-livre-utiliser-couteau", "livre-lire", "livre-lire1", "livre-lire2"
                    	                  , "livre-lire3", "livre-lire4", "livre-lire5", "livre-lire6", "livre-lire7"]
                    	,function() {
                    		tableau.go("fin");
                    	});
                    	break;
                    default:
                        tableau.showText(["utiliser-non-prevu"]);
                        break;
                    }
                }
            }
        },
        "ted" : {
            regarder : function(tableau, dom) {
                tableau.showText(["ted-regarder"]);
            },
            ecouter : function(tableau, dom) {
                tableau.showText(["ted-ecouter"]);
            },
            utiliser : function(tableau, dom, item) {
            	if (!item) tableau.showInventaire(this);
                else {
                	var inventaire = tableau.inventaireView;
                    switch (item) {
                    case "nori":
                        tableau.showText(["ted-utiliser-nori"]);
                        break;
                    case "tournevis":
                    	tableau.showText(["ted-utiliser-tournevis"]);
                    	break;
                    case "casserole":
                    	inventaire.removeItem("casserole");
                    	tableau.showText(["ted-utiliser-casserole"], function() {
                    		tableau.go("piece2", null, true);
                    	});
                    	break;
                    default:
                        tableau.showText(["utiliser-non-prevu"]);
                        break;
                    }
                }
            }
        },
        "ted-assome" : {
            regarder : function(tableau, dom) {
                tableau.showText(["ted-assome-regarder"]);
            },
            examiner : function(tableau, dom) {
            	var inventaire = tableau.inventaireView;
            	if (inventaire.hasItem("eventTedAttache", true)) {
	            	if (inventaire.hasItem("eventCouteauPris", true)) {
	            		tableau.showText(["ted-assome-examiner-no"]);
	            	}else {
	            		tableau.showText(["ted-assome-examiner"]);
	            		inventaire.addItem("couteau");
	            		inventaire.addItem("eventCouteauPris", true);
	            	}
            	}else {
            		tableau.showText(["ted-assome-examiner-peur"]);
            	}
            },
            ouvrir : function(tableau, dom) {
                tableau.showText(["ted-assome-ouvrir"]);
            },
            vide1 : {},
            vide2 : {},
            vide3 : {},
            vide4 : {},
            utiliser : function(tableau, dom, item) {
            	if (!item) tableau.showInventaire(this);
                else {
                	var inventaire = tableau.inventaireView;
                    switch (item) {
                    case "nori":
                        tableau.showText(["ted-assome-utiliser-nori"]);
                        break;
                    case "tournevis":
                    	tableau.showText(["ted-assome-utiliser-tournevis"]);
                    	break;
                    case "couteau":
                    	tableau.showText(["ted-assome-utiliser-couteau"]);
                    	break;
                    case "corde":
                    	tableau.showText(["ted-assome-utiliser-corde"]);
                    	inventaire.removeItem("corde");
                    	inventaire.addItem("eventTedAttache", true);
                    	break;
                    default:
                        tableau.showText(["utiliser-non-prevu"]);
                        break;
                    }
                }
            }
        },
        "echelle" : {
            regarder : function(tableau, dom) {
                tableau.showText(["echelle-regarder"]);
            },
            gouter : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["echelle-gouter"]);
            },
            examiner : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["echelle-examiner"]);
            }
        },
        "lampe" : {
            regarder : function(tableau, dom) {
                tableau.showText(["lampe-regarder"]);
            },
            ouvrir : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["lampe-ouvrir"]);
            },
            allumer : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        break;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        break;
                    case "piece-sombre":
                        tableau.showText(["lampe-allumer"]);
                        break;
                    default:
                        tableau.showText(["lampe-allumer-deja"]);
                        break;
            	}
            },
            utiliser : function(tableau, dom, item) {
            	if (!item) tableau.showInventaire(this);
                else {
                    
                    switch (tableau.lieu) {
                        case "piece":
                            tableau.showText(["attention-ted-arrive"]);
                            return;
                        case "piece-ted":
                            tableau.showText(["no-ted"]);
                            return;
                    }
                    
                	var inventaire = tableau.inventaireView;
                    switch (item) {
                    case "nori":
                        tableau.showText(["lampe-utiliser-nori"]);
                        break;
                    case "tournevis":
                    	tableau.showText(["lampe-utiliser-tournevis"]);
                    	break;
                    case "casserole":
                    	tableau.showText(["lampe-utiliser-casserole"]);
                    	break;
                    case "dessin":
                    	tableau.showText(["lampe-utiliser-dessin"]);
                    	break;
                    case "corde":
                        tableau.showText(["lampe-utiliser-corde"]);
                        break;
                    case "allumette":
                    	if (inventaire.hasItem("eventRideauMis", true)) {
                    		inventaire.removeItem("allumette");
                    		inventaire.addItem("eventTedArrive", true);
                    		tableau.showText(["lampe-utiliser-allumette"], function() {
                    			tableau.go("piece", null, true);
                    		});
                    	}else {
                    		tableau.showText(["lampe-utiliser-allumette-no"]);
                    	}
                    	break;
                    default:
                        tableau.showText(["utiliser-non-prevu"]);
                        break;
                    }
                }
            }
        },
        "fenetre" : {
            regarder : function(tableau, dom) {
                tableau.showText(["fenetre-regarder"]);
            },
            examiner : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
            	tableau.showText(["fenetre-examiner"]);
            },
            ouvrir : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
                tableau.showText(["fenetre-ouvrir"]);
            },
            ecouter : function(tableau, dom) {
                switch (tableau.lieu) {
                    case "piece":
                        tableau.showText(["attention-ted-arrive"]);
                        return;
                    case "piece-ted":
                        tableau.showText(["no-ted"]);
                        return;
                }
            	tableau.showText(["fenetre-ecouter"]);
            },
            utiliser : function(tableau, dom, item) {
            	if (!item) tableau.showInventaire(this);
                else {
                    switch (tableau.lieu) {
                        case "piece":
                            tableau.showText(["attention-ted-arrive"]);
                            return;
                        case "piece-ted":
                            tableau.showText(["no-ted"]);
                            return;
                    }
                    
                	var inventaire = tableau.inventaireView;
                    switch (item) {
                    case "nori":
                        tableau.showText(["fenetre-utiliser-nori"]);
                        break;
                    case "tournevis":
                    	tableau.showText(["fenetre-utiliser-tournevis"]);
                    	break;
                    case "casserole":
                    	tableau.showText(["fenetre-utiliser-casserole"]);
                    	break;
                    case "dessin":
                    	tableau.showText(["fenetre-utiliser-dessin"]);
                    	inventaire.removeItem("dessin");
                    	inventaire.addItem("eventRideauMis", true);
                    	tableau.modifyElement(dom, "fenetre-rideau");
                    	break;
                    default:
                        tableau.showText(["utiliser-non-prevu"]);
                        break;
                    }
                }
            }
        },
        "allumette" : {
            gouter : function(tableau, dom) {
                tableau.showText(["allumette-gouter"]);
            },
            regarder : function(tableau, dom) {
                tableau.showText(["allumette-regarder"]);
            },
            prendre : function(tableau, dom) {
            	var inventaire = tableau.inventaireView;
            	tableau.showText(["allumette-prendre"]);
            	inventaire.addItem("allumette");
            	tableau.removeElement(dom);
            },
            ecouter : function(tableau, dom) {
            	tableau.showText(["allumette-ecouter"]);
            }
        }
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		}
	};
});