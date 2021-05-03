import React from 'react'
import {FormattedHTMLMessage, FormattedMessage} from 'react-intl'
import PageLayout from 'src/components/PageLayout'
import ChangeTitle from '../components/ChangeTitle'
import SocialLinks from '../components/SocialLinks'
import {StyledPageHeading} from '../styled-components'
import {StyledTextSection} from '../styled-components/TextSection'

export default function PrivacyPolicy() {
    return (
        <>
            <PageLayout>
                <ChangeTitle additionalText="AGB"/>
                <StyledPageHeading>
                    Allgemeine Geschäftsbedingungen (AGB)
                </StyledPageHeading>
                <StyledTextSection>
                    <h2>§ 1 Vertragsgegenstand</h2>
                    <p>
                        <ol>
                            <li>Simon vom Eyser - nachfolgend “Dienstleister” - erbringt seine Leistung
                                ausschließlich auf Grundlage der nachfolgenden Allgemeinen Geschäftsbedingungen.
                                Individuelle Vertragsabreden
                                haben Vorrang vor den Allgemeinen Geschäftsbedingungen.
                            </li>
                            <li>Der Kunde - nachfolgend “Kunde” - ist mit der Geltung der AGB
                                einverstanden.
                            </li>
                            <li>Der Vertrag ist ein Werkvertrag. Ergänzend zu den Regelungen dieser AGB
                                gelten die §§ 631 ff. BGB.
                            </li>
                        </ol>
                    </p>

                    <h2>§ 2 Angebot, Leistungen des Dienstleisters, Vertragsänderungen
                    </h2>
                    <p>
                        <ol>
                            <li>Das vorstehende “Angebot” ist freibleibend und unverbindlich, es
                                versteht sich als Aufforderung zur Abgabe eines Angebots durch den Kunden iSv § 145 BGB.
                                Dieses Angebot kann der
                                Dienstleister gegenüber dem Kunden durch Erklärung in Textform (z.B. E-Mail) innerhalb
                                von
                                zwei Wochen nach
                                Zugang des Angebots annehmen.
                            </li>
                            <li>Maßgeblich für die Definition der Werkleistung ist das vorstehende
                                “Angebot”. Das “Angebot” wird mit Zustandekommen des Vertrages wesentlicher Bestandteil
                                des
                                Vertrages.
                            </li>
                            <li>Sofern die Werkleistung in der Erstellung einer Webseite auf
                                Content-Management-System-Basis (“CMS”) liegt, ist mit der Fertigstellung des Werkes und
                                der
                                Übergabe, dem
                                Kunden ein Exemplar des Quellcodes, sowie die Zugangsdaten zum CMS zu übergeben.
                            </li>
                            <li>Der Dienstleister verpflichtet sich nur solche Passwörter für seine
                                erstellten Leistungen zu vergeben, die nach dem jeweils geltenden Stand der Technik als
                                sicher gelten.
                            </li>
                            <li>Der Kunde ist bis zur Abnahme des Werkes berechtigt Änderungen der
                                Werkleistung zu verlangen (“Vertragsänderung”). Der Dienstleister wird dem Kunden eine
                                Aufstellung der dadurch
                                verursachten Mehrkosten und eine eventuell notwendige Änderung des terminlichen Ablaufs
                                übergeben
                                (“Vertragsänderungsangebot”). Mit Annahme des Vertragsänderungsangebots durch den Kunden
                                wird dieses Bestandteil
                                des Vertrages.
                            </li>
                        </ol>
                    </p>

                    <h2>§ 3 Leistungen des Kundens, Beauftragung von Dritten, Referenz
                    </h2>
                    <p>
                        <ol>
                            <li>Der Kunde stellt dem Dienstleister eigenverantwortlich die zur
                                Erstellung der Werkleistung notwendigen Inhalte und Infrastruktur zur Verfügung. Inhalte
                                sind insbesondere alle
                                nach Wunsch des Kundens zu verwendenden Texte, Grafiken, Fotografien und Tabellen.
                                Infrastruktur ist
                                insbesondere die Bereitstellung eines für die Erbringung der Werkleistung geeigneten
                                Servers
                                mit ausreichend
                                Speicherplatz.
                            </li>
                            <li>Die Inhalte sind dem Dienstleister in digitaler Form zur Verfügung zu
                                stellen.
                            </li>
                            <li>Für die Sicherheit der Infrastruktur, insbesondere für die vergebenen
                                Passwörter, ist der Kunde selbst verantwortlich.
                            </li>
                            <li>Der Kunde stimmt der Beauftragung von Dritten (insb. “SubDienstleister”)
                                zu. Für Handlungen von beauftragten Dritten haftet der Dienstleister wie für eigene
                                Handlungen, insbesondere
                                gelten etwaige vereinbarte Haftungsbeschränkungen oder -erleichterungen zwischen Kunde
                                und
                                Dienstleister auch
                                für Handlungen des Dritten.
                            </li>
                            <li>Der Kunde erklärt sich damit einverstanden, dass der Dienstleister den
                                Kunden in Online- und Offline-Medien als Referenz angeben darf. Insbesondere räumt der
                                Kunde
                                hierfür eine
                                einfache, kostenlose, nicht übertragbare Lizenz hinsichtlich jeglicher für die
                                Darstellung
                                des Kundens
                                verwendeter Schutzrechte ein.
                            </li>
                        </ol>
                    </p>

                    <h2>§ 4 Abnahme</h2>
                    <p>
                        <ol>
                            <li>Nach vollständiger Fertigstellung der Werkleistung und Rechnungsstellung
                                wird eine vierwöchige Testphase vereinbart, sofern die Werkleistung nach ihrer Art
                                hierfür
                                geeignet ist. Die
                                Testphase ermöglicht dem Kunden eine Überprüfung der Funktionsfähigkeit des Werkes und
                                ihrer
                                Übereinstimmung mit
                                der vereinbarten Werkleistung.
                            </li>
                            <li>Der Kunde wird dem Dienstleister während der Testphase auftretende
                                Mängel unverzüglich in Textform (z.B. E-Mail) anzeigen. Die Testphase verlängert sich
                                bis
                                zur Behebung des
                                Mangels und um eine sich daran anschließende angemessene Prüfungsfrist.
                            </li>
                            <li>Treten während der Testphase keine wesentlichen Fehler auf
                                oder werden dem Dienstleister keine wesentlichen Fehler in Textform angezeigt, so wird
                                der
                                Kunde in Textform
                                erklären, dass die Werkleistung vertragsgemäß Hergestellt wurde (“Abnahme”). &nbsp;
                            </li>
                            <li>Der Abnahme steht es gleich, wenn der Kunde nicht innerhalb von 14 Tagen
                                nach Ablauf der Testphase die Abnahme in Textform erklärt, oder er das vereinbarte
                                Honorar
                                zahlt.
                            </li>
                            <li>Der Dienstleister ist berechtigt Zwischenabnahmen von abgrenzbaren
                                Teilen der Werkleistung zu verlangen.
                            </li>
                        </ol>
                    </p>

                    <h2>§ 5 Vergütung</h2>
                    <p>
                        <ol>
                            <li>Sofern nichts anderes vereinbart, wird die Vergütung mit der
                                Rechnungsstellung nach vollständiger oder teilweiser Fertigstellung der Werkleistung
                                fällig.
                            </li>
                            <li>Ist die Höhe der Vergütung nicht bestimmt, so hat der Kunde die für die
                                Leistung übliche Vergütung in Höhe von 75 € pro Stunde zu entrichten.
                            </li>
                            <li>Auslagen sind gesondert zu erstatten.</li>
                            <li>Der Dienstleister ist berechtigt Vorschüsse zu verlangen.</li>
                            <li>Die im “Angebot” aufgeführten Kosten verstehen sich als
                                “Kostenanschlag”. Der Dienstleister übernimmt die Gewähr für die Richtigkeit nicht.
                                Sollten
                                die Kosten trotz
                                sorgfältiger, nach bestem wissen und gewissen getätigter Planung die veranschlagten
                                Kosten
                                um mehr als 20%
                                übersteigen, so wird der Dienstleister den Kunden in Textform hierauf hinweisen.
                                Widerspricht der Kunde nicht
                                innerhalb von 5 Tagen in Textform der Übersteigung, so gilt diese als genehmigt.
                            </li>
                        </ol>
                    </p>

                    <h2>§ 6 Nutzungsrechte</h2>
                    <p>
                        <ol>
                            <li>Der Dienstleister räumt dem Kunden nach Beendigung und vollständiger
                                Begleichung offener Forderungen aus diesem Vertrag ein einfaches, nicht übertragbares
                                Nutzungsrecht an den von
                                ihm hergestellten Werken ein. Die Nutzung erstreckt sich auf diejenigen Verwertungs- und
                                Wiedergaberechte, die
                                nach dem Zweck des Vertrages notwendig sind. Sofern keine urheberrechtlichen Schranken
                                greifen, ist insbesondere
                                das Verbreitungsrecht (§ 17 UrhG) ausgeschlossen.
                            </li>
                            <li>Mit der Begleichung der vertraglich vereinbarten Vergütung ist die
                                Einräumung der Rechte am erstellten Werk abgegolten.
                            </li>
                            <li>Der Dienstleister ist insbesondere berechtigt, jegliche selbst erstellte
                                Werke, Know-How oder ähnliches uneingeschränkt für andere Aufträge zu verwenden, sofern
                                nicht anders
                                vereinbart.
                            </li>
                        </ol>
                    </p>

                    <h2>§ 7 Haftung, Gewährleistung</h2>
                    <p>
                        <ol>
                            <li>Der Dienstleister haftet - außer bei Verletzung wesentlicher
                                Vertragspflichten, bei Verletzung von Leben, Körper oder Gesundheit oder bei Ansprüchen
                                aus
                                dem
                                Produkthaftungsgesetz - nur für Vorsatz und grobe Fahrlässigkeit. Wesentliche
                                Vertragspflichten sind solche,
                                deren Erfüllung zur Erreichung des Vertragszwecks notwendig sind.
                            </li>
                            <li>Die Gewährleistungsfrist beträgt 12 Monate. Sie beginnt mit der
                                vollständigen Abnahme iSv § 4 Nr. 3, andernfalls mit Fertigstellung der Leistung.
                            </li>
                            <li>Die vereinbarte Beschaffenheit iSv § 633 II 1 BGB ergibt sich aus dem
                                “Angebot”.
                            </li>
                            <li>Die Funktionsfähigkeit von Drittsoftware (insbesondere “Plug-ins”,
                                “CMS-Software”) wird nur bis zum Zeitpunkt der Abnahme iSv § 4 Nr. 3 gewährleistet.
                                Danach
                                geht die Gefahr
                                jeglicher Updates oder Upgrades auf den Kunden über.
                            </li>
                            <li>Unbeschadet anderweitiger Vereinbarungen ist der Dienstleister nicht
                                verpflichtet die jeweils aktuelle Version der Drittsoftware für die Werkerstellung zu
                                verwenden, sofern sich
                                hieraus keine schwerwiegenden Sicherheitsmängel für das Gesamtwerk ergeben.
                            </li>
                            <li>Der Dienstleister verpflichtet sich zu Zwecken der Gewährleistung den
                                Stand des Werkes zum Zeitpunkt der Abnahme iSv § 4 Nr. 3 für 18 Monate zu speichern.
                            </li>
                            <li>Ein Sachmangel iSv § 633 I BGB liegt insbesondere nicht vor, wenn
                            </li>
                        </ol>
                    </p>
                    <p>
                        <ol>
                            <li>der Hersteller von verwendeter Drittsoftware nach der Abnahme iSv § 4
                                Nr. 3 ein Update oder Upgrade zur Verfügung stellt, welches die Funktionsfähigkeit des
                                Gesamtwerks
                                beeinträchtigt.
                            </li>
                            <li>schwerwiegende Sicherheitslücken verwendeter Drittsoftware erst nach
                                Abnahme iSv § 4 Nr. 3 bekannt werden.
                            </li>
                            <li>der Kunde während der Testphase im Wege der Selbstvornahme eigenständige
                                Änderungen am Werk tätigt und dadurch das Gesamtwerk beeinträchtigt.
                            </li>
                        </ol>
                    </p>
                    <p>
                        <ol>
                            <li>Der Dienstleister haftet nicht für Inhalte, die vom Kunden für die
                                Leistungserstellung geliefert wurden. Sollten Dritte gegen den Dienstleister Forderungen
                                deswegen geltend
                                machen, so steht dem Dienstleister ein Freistellungsanspruch gegen den Kunden zu.
                            </li>
                        </ol>
                    </p>

                    <h2>§ 8 Schlussbestimmungen</h2>
                    <p>
                        <ol>
                            <li>Ausschließlicher Gerichtsstand für alle Streitigkeiten zwischen den
                                Parteien aus oder in Verbindung mit diesem Vertrag ist Kandel. Dieser Vertrag unterliegt
                                deutschem Recht unter
                                Ausschluss des UN-Kaufrechts.
                            </li>
                            <li>Sollte eine Bestimmung dieses Vertrags unwirksam oder undurchführbar
                                sein oder werden, so wird die Gültigkeit des Vertrages im Übrigen hiervon nicht berührt.
                                Die
                                Parteien werden
                                sich bemühen, die unwirksame oder undurchführbare Bestimmung durch eine wirksame und
                                durchführbare Regelung zu
                                ersetzen, die der unwirksamen oder undurchführbaren Bestimmung wirtschaftlich so nahe
                                wie
                                möglich kommt. Das
                                gleiche gilt im Falle einer Regelungslücke.
                            </li>
                        </ol>
                    </p>


                </StyledTextSection>
                <SocialLinks/>
            </PageLayout>
        </>
    )
}
